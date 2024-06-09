// routes/api/users.js
const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      name,
      email,
      password,
    });

    await user.save();

    res.send('User registered');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.put('/:id', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, { name, email, password });

        if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
        } else{
            res.send('User registered');
        }

        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
  });

  router.get('/', async (req, res) => {
    try {
      const users = await User.find().sort({ date: -1 });
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });


  

module.exports = router;
