const path = require("path");
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/product.js');
const port = process.env.PORT || 3002;

connectDB();

const app = express();



app.use('/api/products', productRoutes);
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'development') {
    app.get('/', (req, res) => {
        res.send('API is running..');
    })
} else {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
}
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});