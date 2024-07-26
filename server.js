const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api/notes', apiRoutes);

// HTML Routes
const htmlRoutes = require('./routes/htmlRoutes');
app.use('/', htmlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});