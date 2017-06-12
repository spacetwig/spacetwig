const {mongoose} = require('../db/mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = require('./photo');

const PropertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photos: [PhotoSchema],
});

const Property = module.exports = mongoose.model('Property', PropertySchema);
