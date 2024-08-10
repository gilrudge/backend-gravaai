const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema( {

  bt_num: Number,
  process_time: String,
  flg_process: Boolean,
  macDvr: String,
  link: String  

});

const Video = mongoose.model('Video', videoSchema)


module.exports = Video