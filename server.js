const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Initialize the app 
const app = express(); 
const PORT = process.env.PORT | 8000;

