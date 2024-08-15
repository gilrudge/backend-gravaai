const Arena = require('../models/Arena');
const comparaData = require('../utils/comparaData')


const limpaVideosAntigos = async () => {

  const limpaVideo = async (itemArena, itemVideos) => {
    if(comparaData(itemVideos.date)){

      await Arena.findByIdAndUpdate(itemArena._id,

        {$pull: {videos:{_id:itemVideos._id}}},
        {new: true}
      )

     };
  };

  try {

    const arenas = await Arena.find();  
    const idArenas = arenas.map(itemArena => {
      
      return itemArena.videos.map(itemVideos => {

        limpaVideo(itemArena,itemVideos)
      
      });
    
    });

    
    console.log("videos excluidos")

  } catch (error) {

    console.log(error.message)
    
  }



};

// limpaVideosAntigos()
module.exports = limpaVideosAntigos