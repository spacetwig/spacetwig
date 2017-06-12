const {mongoose} = require('../db/mongoose');
const User = require('../models/user');
const cloudinary = require('cloudinary');
const passport = require('passport');
const {Strategy} = require('passport-local');
const utils = require('../utils');

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
  signUpMidware(req, res, next) {
    req.checkBody('firstName', 'firstname field is required').notEmpty();
    req.checkBody('lastName', 'lastname field is required').notEmpty();
    req.checkBody('email', 'choose an email please').notEmpty();
    req.checkBody('email', "pls use a valid email address").isEmail();
    req.checkBody('password', "you didn't pick a password").notEmpty();
    req.checkBody('confirmPassword', 'passwords do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors) {
      res.render('index', {
        errors
      });
    }
    else {
      const email = req.body.email;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const password = req.body.password;

      User.findOne({email: email})
        .then(user => {
          if(user) {
            req.flash('error_msg', email + ' is already taken');
            res.redirect('/');
          }
          else {
            if(req.file === undefined) {

              const ranString = (length) => {
                let text = "";
                const possible = "AbcdEFgHiJkLMNoPQrStUvwwXyZZ123456790";

                for(let i = 0; i < length; i++) {
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
              };

              let randomSTRING = ranString(100);

              const newUser = new User({
                email,
                firstName,
                lastName,
                password,
                randomString: randomSTRING
              });

              let confirmationLink = `<p>Hello ${newUser.firstName}, Please Click  This link <a href="http://localhost:3000/users/confirmation/userconf/${newUser.randomString}">${randomSTRING}</a> To Confirm Your Email</p>`;

              utils.Email.sendEmail(req.body, confirmationLink)
                .then(response => {
                  console.log('success!');
                })
                .catch(err => {
                  console('fail!!');
                });

              User.registerUser(newUser, (err, user) => {
                if(err) {
                  console.log(err);
                }
                else {
                  req.flash('success_msg', 'You signed Up successfully, pls confirm your email: ' + email);
                  passport.authenticate('local', {
                    successRedirect: '/',
                    failureRedirect: '/',
                    failureFlash: true
                  })(req, res, next);
                }
              });
            }
            else {
              cloudinary.uploader.upload(req.file.path, (result) => {
                result.devurl = `http://res.cloudinary.com/nerdyemmanuel/image/upload/w_512,h_512,c_crop,g_face,r_max/w_200/${result.public_id}.jpg`;

                let profilePhoto = result.devurl;

                const ranString = (length) => {
                  let text = "";
                  const possible = "AbcdEFgHiJkLMNoPQrStUvwwXyZZ123456790";

                  for(let i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                  }
                  return text;
                };

                let randomSTRING = ranString(100);

                const newUser = new User({
                  email,
                  firstName,
                  lastName,
                  password,
                  profilePhoto,
                  randomString: randomSTRING
                });

                let confirmationLink = `<p>Hello ${newUser.firstName}, Please Click  This link <a href="http://localhost:3000/users/confirmation/userconf/${newUser.randomString}">${randomSTRING}</a> To Confirm Your Email</p>`;

                utils.Email.sendEmail(req.body, confirmationLink)
                  .then(response => {
                    console.log('success!');
                  })
                  .catch(err => {
                    console('fail!!');
                  });

                User.registerUser(newUser, (err, user) => {
                  if(err) {
                    console.log(err);
                  }
                  else {
                    req.flash('success_msg', 'You signed Up successfully, pls confirm your email: ' + email);
                    passport.authenticate('local', {
                      successRedirect: '/',
                      failureRedirect: '/',
                      failureFlash: true
                    })(req, res, next);
                  }
                });
              });
            }
          }
        });
    }
  }
};
