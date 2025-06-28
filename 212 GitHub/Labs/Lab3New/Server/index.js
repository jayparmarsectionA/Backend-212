const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes/router');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use router
app.use('/', router);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
