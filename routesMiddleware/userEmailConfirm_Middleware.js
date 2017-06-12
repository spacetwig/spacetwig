const {mongoose} = require('../db/mongoose');
const User = require('../models/user');


module.exports = {
  useremailConf(req, res, next) {
    User.findOne({randomString: req.params.randomstring})
      .then(user => {
        User.findOneAndUpdate(
          {_id: user._id},
          {
            randomString: null,
            confirmed: 'yup!'
          },
          {
            new: true
          }, function(err, user) {
              if(err) {
                return console.log(err);
              }

              console.log(user);
              user.save();
              req.flash('success_msg', user.email + ' confirmed successfully');
              res.redirect('/');
            }
          );
        });
  }
};
