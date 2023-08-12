const express = require('express');
const products = require('./data/products');
const port = 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('API is running..');
})
app.get('/api/products', (req, res) => {
    res.json(products);
})
app.get('/api/products/:id', (req, res) => {
    const products = products.find((p) => p._id === req.params.id);
    res.json(products);
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});