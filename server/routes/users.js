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

router.put('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  user.set(req.body);
  await user.save();
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  await user.remove();
  res.status(204).send();
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send('User not found');
  }
  if (user.password !== req.body.password) {
    return res.status(401).send('Password is incorrect');
  }
  res.send(user);
});

router.post('/logout', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  user.session = null;
  await user.save();
  res.status(204).send();
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.post('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  user.session = req.body;
  await user.save();
  res.send(user.session);
});

router.delete('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  user.session = null;
  await user.save();
  res.status(204).send();
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});

router.get('/:id/session', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user.session);
});


module.exports = router;
