const Arena = require('../models/Arena');
const path = require('path');
// const express = require('express')

const getArenasInfoCtrl = async (req, res) => {

  try {

    const arena = await Arena.find()
    // res.status(200).sendFile(path.resolve(__dirname,'../front-teste', 'arenas.html'))
    res.status(200).json({ arenas: arena })

    

  } catch (error) {

    console.log(error.message);

    res.status(500).json({ message: "Ocorreu um erro na requisição para o servidor, tente novamente." })

  }

};


module.exports = getArenasInfoCtrl;