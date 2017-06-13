const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login/facebook',
  passport.authenticate('facebook', {scope: ["email"]}));

//GET /auth/facebook/return
router.get('/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook/return' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/login/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/plus.me'] }));

//GET /auth/google/return
router.get('/google/return',
  passport.authenticate('google', { failureRedirect: '/jkhhjvjhbvjh' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


module.exports = router;
