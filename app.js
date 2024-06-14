const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request received at updated: ${req.url}`);
  next();
});

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Hello from the Express app!');
});

// Route with a path parameter
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID: ${userId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});