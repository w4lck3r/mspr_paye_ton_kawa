const express = require('express');
const connectDB = require('./config/db');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', inventoryRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Inventory service running on port ${PORT}`);
});
