const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser

}



async function registerUser(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    await newUser.save();

    if (newUser) {
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        })
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

}







