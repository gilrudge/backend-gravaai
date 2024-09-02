const path = require('path');
// const express = require('express')

const getPaginaArenasCtrl =  async (req, res) => {

  try { 
    
    
    res.status(200).sendFile(path.join(__dirname,'../front-teste', 'arenas.html'))
    
    
    
    
  } catch (error) {

    console.log(error.message);

    res.status(500).json({ message: "Ocorreu um erro na requisição para o servidor, tente novamente." })

  }

};


module.exports = getPaginaArenasCtrl;