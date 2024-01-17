const path = require("path");
const punycode = require('punycode');
const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/product.js');
const userRoutes = require('./routes/user.js');
const orderRoutes = require('./routes/order.js');
const port = process.env.PORT || 3002;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
if (process.env.NODE_ENV === 'development') {
    app.get('/', (req, res) => {
        res.send('API is running..');
    })
} else {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
}
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});