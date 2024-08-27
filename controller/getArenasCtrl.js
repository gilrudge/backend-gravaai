// const Arena = require('../models/Arena');
const path = require('path');
// const express = require('express')

const getArenasCtrl =  (req, res) => {

  try { 
    

    res.status(200).sendFile(path.resolve(__dirname,'../front-teste', 'arenas.html'))
    
    
    
  } catch (error) {

    console.log(error.message);

    res.status(500).json({ message: "Ocorreu um erro na requisição para o servidor, tente novamente." })

  }

};


module.exports = getArenasCtrl;