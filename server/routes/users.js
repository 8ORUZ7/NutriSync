const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

module.exports = router;