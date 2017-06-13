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


module.exports = router;
