const {mongoose} = require('../db/mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },
  lastName: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },
  password: {
    type: String,
    required: false,
    trim: true,
    unique: false
  },
  email: {
    type: String,
    required: false,
    trim: true,
    unique: true
  },
  profilePhoto: {
    type: String,
    required: false,
    unique: false
  },
  randomString: {
    type: String,
    unique: false,
    required: false
  },
  confirmed: {
    type: String,
    unique: false,
    required: false
  },
  socialUser: {
    type: String,
    unique: false,
    required: false
  },
  userOccupation: {
    type: String,
    required: false,
    unique: false
  },
  userWebsite: {
    type: String,
    required: false,
    unique: false
  },
  userPhoneNumber: {
    type: String,
    required: false,
    unique: false
  },
  accountType: {
    type: String,
    required: false,
    unique: false
  },
  properties: [{
    type: Schema.Types.ObjectId,
    ref: 'Property'
  }]
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.registerUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) {
        console.log(err);
      }
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.getUserByEmail = function(email, callback) {
  const query = {
    email: email
  };
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare( candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};
