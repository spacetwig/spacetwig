const {mongoose} = require('../db/mongoose');
const User = require('../models/user');
const passport = require('passport');
const {Strategy} = require('passport-local');


passport.use(new Strategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password'
    },
    (email, password, done) => {
      User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
          return done(null, false, {message: 'this account does not exist'});
        }

       User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
         return done(null, user);
        }
        else {
         return done(null, false, {message: 'oops! wrong password! try again'});
       }
     });
   });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = {
  usersignIn(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })(req, res, next);
  }
};
