const Arena = require('../models/Arena');

const getArenasCtrl = async (req, res) => {

  try {

    const arenas = await Arena.find();
   

    res.status(200).json(arenas);

  } catch (error) {

    console.log(error);

    res.status(500).json({ message: "Ocorreu um erro na requisição para o servidor, tente novamente." })

  }

};


module.exports = getArenasCtrl;