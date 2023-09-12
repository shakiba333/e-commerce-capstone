const Product = require('../models/product');
const Order = require('../models/order');

module.exports = {
    placeOrder,
    getMyOrders,
    getOrderById,
}

async function placeOrder(req, res) {
    try {
        const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
        if (orderItems && orderItems.length === 0) {
            res.status(404).json({ message: 'No order items' });
        } else {
            const newOrder = await new Order({
                orderItems: orderItems.map((p) => ({
                    ...p,
                    product: p._id,
                    _id: undefined
                })),
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
            });
            const savedOrder = await newOrder.save();
            res.status(201).json(savedOrder);
        }
    } catch (error) {
        res.status(404).json({ message: 'Order are not created' })
    }
}

async function getMyOrders(req, res) {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);

}

async function getOrderById(req, res) {
    try {
        const order = await Order.findById(req.params.id).populate(
            'user',
            'name email'
        );
        if (order) {
            res.json(order);
        }
    } catch (error) {
        res.status(404).json({ message: 'Order not found' })
    }
}

