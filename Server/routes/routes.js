const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/Authcontroller');
const { protect } = require('../middleware/authMiddleware'); 

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

module.exports = router;