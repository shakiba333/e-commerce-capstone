const Product = require('../models/product');

module.exports = {
    getAllProducts,
    showProduct
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