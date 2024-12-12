const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/category.routes');
const rackRoutes = require('./routes/rack.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const transactionRoutes = require('./routes/transaction.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parsing JSON
app.use(express.urlencoded({ extended: true })); // Parsing URL-encoded data

app.get('/', (req, res) => {
  res.send('Welcome to Inventory App!');
});

// Routes all
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/racks', rackRoutes);
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
