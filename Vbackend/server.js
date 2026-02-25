const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const visitorRoutes = require('./routes/visitors');
const userRoutes = require('./routes/users');

// Basic Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Luxury Residential System API' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', database: 'MongoDB Connected' });
});

// API Routes
app.use('/api/visitors', visitorRoutes);
app.use('/api/users', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
