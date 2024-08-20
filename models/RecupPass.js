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
  tempPass: {
    type:String,
    required:true
  }
}

const RecupPass = mongoose.model('RecupPass', RecupPassSchema);

module.exports = RecupPass