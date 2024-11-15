const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  
  name: {
   type: String,
   required:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type:String,
    required:true,
    select: false
  },
  passwordResetToken: {
    type:String,
    // required:true,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select:false
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  }


})

const User = mongoose.model('User', UserSchema);

module.exports = User;