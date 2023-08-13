const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/product.js');
const port = process.env.PORT || 3002;

connectDB();

const app = express();


app.get('/', (req, res) => {
    res.send('API is running..');
})
app.use('/api/products', productRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});