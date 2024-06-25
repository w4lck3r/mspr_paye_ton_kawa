const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
