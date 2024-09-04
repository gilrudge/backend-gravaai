const Arena = require('../models/Arena');


const deleteVideoArenaCtrl = async(req, res) => {

  try {

    const {idArena, idVideo} = req.params;    
   
    const arenaExists = await Arena.findById(idArena);
    
    if(!arenaExists){
      return res.status(404).json({message: "Arena não encontrada "})
    };

    const deleteVideo = await Arena.findByIdAndUpdate(idArena,

      {$pull: { videos:{_id:idVideo}}},
      {new: true}
    );

    if(!deleteVideo){
      return res.status(404).json({message: "Video não deletado"})
    };

    res.status(200).json("Vídeo deletado com sucesso");

  } catch (error) {

    console.log(error.message);

    res.status(404).json({ message: "Video não encontrado" });

  };

};

module.exports = deleteVideoArenaCtrl