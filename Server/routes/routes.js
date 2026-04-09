const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/Authcontroller');
const { protect } = require('../middleware/authMiddleware'); 
const passport = require('passport');
const generateToken = require('../config/GenerateToken');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', protect, async (req, res) => {

  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role
  });
});
router.get(
  '/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: 'http://localhost:5173/login' }),
  (req, res) => {

    const token = generateToken(req.user._id);
    const userData = JSON.stringify({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      token: token
    });

    const encodedUser = encodeURIComponent(userData);
    res.redirect(`http://localhost:5173/login?user=${encodedUser}`);
  }
);
module.exports = router;