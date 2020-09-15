const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  photo: String,
  status: String,
  born: String,
  aliases: {
    type: [String],
    default: ['unknown']
  },
  residence: {
    type: [String],
    default: ['unknown']
  },
  occupation: {
    type: [String],
    default: ['unknown']
  },
  hairColor: {
    type: [String],
    default: ['unknown']
  },
  eyeColor: String,
  family: {
    type: [String],
    default: ['unknown']
  },
  firstAppearance: String,
  portrayedBy: {
    type: [String],
    default: ['unknown']
  }
});

module.exports = mongoose.model('Character', characterSchema);