const Arena = require('../models/Arena');


const getSelectedArenaCtrl = async (req, res) => {

  try {
    
    const {idArena} = req.params;

    const arenaExists = await Arena.findById(idArena);

    if(!arenaExists){
      return res.status(404).json({message: "Arena não encontrada"})
    };

    res.status(201).json({message: "Arena encontrada", arena: arenaExists});

  } catch (error) {

      console.log(error.message);

      res.status(500).json({message: "Ocorreu um erro na requisição"})
  };

};

module.exports = getSelectedArenaCtrl;