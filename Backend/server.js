const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Environment Variables load karein
dotenv.config();


connectDB();

const app = express();

// 3. Middlewares
app.use(cors()); // Frontend (React) ko backend se connect karne ke liye
app.use(express.json()); // JSON data handle karne ke liye

// 4. Basic Test Route
app.get('/', (req, res) => {
  res.send('Welcome to animated event management');
});

// 5. Future Routes (Yahan members apne routes add karenge)
// app.use('/api/traffic', require('./routes/trafficRoutes'));
// app.use('/api/emergency', require('./routes/emergencyRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
});