// app.js or server.js
const express = require('express');
const connectDB = require('./db');
const users = require('./routes/api/users');
// const router = express.Router();
// const User = require('./models/User');


const app = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define Routes
app.use('/api/user/add', users);

app.use('/api/user/:id', users);

app.use('/api/user', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
