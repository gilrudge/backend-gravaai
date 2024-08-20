const mongoose = require('mongoose');


const RecupPassSchema = {
  
  name: {
    type:String
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  passwordResetToken: {
    type:String,
    required:true,
    select: false
  },
  passwordReserEpires: {
    type: Date,
    select:false
  }
}

const RecupPass = mongoose.model('RecupPass', RecupPassSchema);

module.exports = RecupPass