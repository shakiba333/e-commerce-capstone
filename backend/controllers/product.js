const Product = require('../models/product');

module.exports = {
    getAllProducts,
    showProduct,
    productReviews,
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(404).json({ message: 'Products not found.' })
    }
}
async function showProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ message: 'Product not found.' })
    }
}

async function productReviews(req, res) {
    try {
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);

        if (product) {
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()

            );

            if (alreadyReviewed) {
                res.status(404).json({ message: 'Your review is already exist.' });
            }


            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment: comment,
                user: req.user._id,
            };
            console.log(review)

            product.reviews.push(review);

            product.rating =
                product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length;

            await product.save();
            res.status(201).json({ message: 'Review added' });

        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}