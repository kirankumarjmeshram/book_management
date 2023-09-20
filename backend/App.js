const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

app.use('/api/books', bookRoutes);
app.use('/api/search', searchRoutes);

module.exports = app;
