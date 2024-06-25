const express = require('express');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
