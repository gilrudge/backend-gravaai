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
  videos: []
  
});

const Arena = mongoose.model('Arena', novaArenaSchema);

module.exports = Arena