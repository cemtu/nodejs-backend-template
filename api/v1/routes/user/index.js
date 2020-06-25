const express = require('express');

const router = express.Router();

// MARK: POST Methods
router.post('/register', (req, res) => {
  // When user wants to create new account.
  res.status(200).json({
    message: 'register',
  });
});

router.post('/login', (req, res) => {
  // When user already have an account and wants login.
  res.status(200).json({
    message: 'login',
  });
});

// GET Methods

// Delete Methods

// PATCH Methods

module.exports = router;
