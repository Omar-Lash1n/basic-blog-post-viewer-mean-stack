const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./server/config/db');

const app = express();

// Connect to MongoDB (optional — app works without it)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/posts', require('./server/routes/posts'));

// Serve Angular static files in production
app.use(express.static(path.join(__dirname, 'client/dist/client/browser')));

// Catch-all route — send Angular app for any non-API route
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/client/browser/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
