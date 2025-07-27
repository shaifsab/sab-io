const express = require('express');
const app = express();
const db = require('./config/db');
const router = require('./routes');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = process.env.BASE_PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${port}`;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// Set view engine
app.set('view engine', 'ejs');

// Use router
app.use(router);

// Connect to the database
db();

// Start the server
// app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
app.listen(port, () => console.log(`Server is running on ${BASE_URL}`));
