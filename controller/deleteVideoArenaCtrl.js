const Arena = require('../models/Arena');


const deleteVideoArenaCtrl = async(req, res) => {

  try {

    const {idArena, idVideo} = req.params
    
    // const {idVideo} = req.params
    // const video = await Video.findOne(idVideo);
    const arena = await Arena.findById(idVideo)
    
    // const video = await Video.findById(idVideo)
    // const videos = arena.videos.map(item => item._id)
    // console.log(video)
    // console.log(idVideo)
    // arena.save()
    console.log(videos)

    res.status(200).json("Vídeo deletado com sucesso")

  } catch (error) {

    console.log(error.message);

    res.status(404).json({ message: "Video não encontrado" })

  }



};

module.exports = deleteVideoArenaCtrl