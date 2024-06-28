const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement authentication logic here
  res.sendStatus(200);
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  res.sendStatus(200);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
