/* eslint-disable no-console */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware set up
app.use(morgan('combined'));

// CORS configuration
const whitelist = ['http://localhost:8080'];
const corsOptions = {
  origin: whitelist,
};

// API routes
app.get('/api/hello', cors(corsOptions), (req, res) => {
  res.send({ message: 'Hello From Express' });
});

// Server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Http server listening on:', port);
