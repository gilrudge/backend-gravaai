const mongoose = require('mongoose');


const RecupPass = mongoose.model('RecupPass', {
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  tempPass: Number
});

module.exports = RecupPass