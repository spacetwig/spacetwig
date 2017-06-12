const {mongoose} = require('../db/mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  public_id: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  original_filename: {
    type: String,
    required: false
  },
  resource_type: {
     type: String,
     required: false
   }
});

module.exports = PhotoSchema;
