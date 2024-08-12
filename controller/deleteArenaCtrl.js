const Arena = require('../models/Arena');

const deleteArenaCtrl = async (req, res) => {
  try {

    const {idArena} = req.params

    const arenaExists = await Arena.findById(idArena);

    if(!arenaExists){

      return res.status(404).json({message: "Arena solicitada não encontrada"})

    };

    const excluiArena = await Arena.findByIdAndDelete(idArena);

    res.status(201).json({message: "Arena Deletada com sucesso"})
    
  } catch (error) {

      console.log(error.message);

      res.status(404).json({message: "Ocorreu um erro ao apagar a arena"});
  };



};

module.exports = deleteArenaCtrl