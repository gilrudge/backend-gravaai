const mongoose = require('mongoose');

const novaArenaSchema = new mongoose.Schema({
  
  nomeArena: String,
  cnpj: String,
  macDvr: String,
  pais: String,
  estado: String,
  cidade: String,
  bairro: String,
  endereco: String,
  videos: [{
      bt_num: Number,
      process_time: String,
      date: String,
      hour: String,
      flg_process: Boolean,
      macDvr: String,
      link: String,
      created: String,
      createdAt: {type: Date, immutable: true, default: () => Date.now()}
    }]
  });


const Arena = mongoose.model('Arena', novaArenaSchema);

module.exports = Arena
