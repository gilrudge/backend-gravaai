const Arena = require('../models/Arena');
const comparaData = require('../utils/comparaData')


const limpaVideosAntigosCtrl = async (req, res) => {

  const limpaVideo = async (itemArena, itemVideos) => {
    if (comparaData(itemVideos.date)) {

      await Arena.findByIdAndUpdate(itemArena._id,

        { $pull: { videos: { _id: itemVideos._id } } },
        { new: true }
      )

    };
  };

  try {

    const arenas = await Arena.find();
    const idArenas = arenas.map(itemArena => {

      return itemArena.videos.map(itemVideos => {

        limpaVideo(itemArena, itemVideos)

      });

    });


    res.status(200).json({message:"Videos excluidos com sucesso", idArenas})

  } catch (error) {

    console.log(error.message)

    res.status(500).json({message: "Ocorrreu um erro ao excluir os vídeos"})

  }



};


module.exports = limpaVideosAntigosCtrl