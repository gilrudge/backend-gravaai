const mongoose = require('mongoose');

const novaArenaSchema = new mongoose.Schema({
  
  nomeArena: {
    type:String,
    required:true
  },
  cnpj: {
    type:String,
    required: true,
    unique: true
  },
  macDvr: {
    type:String,
    required: true,
    unique: true
  },
  dvrAddr: {
    type: String,
    required: true,
    unique: true
  },
  pais: {
    type:String,
    required: true,
  },
  estado: {
    type:String,
    required: true,
  },
  cidade: {
    type:String,
    required: true,
  },
  bairro: {
    type:String,
    required: true,
  },
  endereco: {
    type:String,
    required: true,
  },
  cep: {
    type:String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  videos:{ 
    
    default:[],
    type:[
      {
      bt_num: {
        type:Number,
        // required: true
      },
      process_time: {
        type:String,
        // required:true
      },
      date: {
        type:String,
        // required: true
    },
      hour: {
        type:String,
        // required: true
    },
      flg_process: {
        type: Boolean
    },
      flgRotate:{
      type: Boolean
    },
      link: {
        type:String,
        // required: true,       
    },      
      createdAt: {
        type: Date,
        default: () => Date.now()
      }
    }]
  }
  });


const Arena = mongoose.model('Arena', novaArenaSchema);

module.exports = Arena;
