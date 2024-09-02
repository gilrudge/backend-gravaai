const Arena = require('../models/Arena');



const getVideosNaoProcessados = async (req, res) => {

  try {
    
  
    const arena = await Arena.aggregate([{
      $project:{
        _id:1,
        nomeArena:1,
        macDvr: 1,
        videos: {
          $filter: {
            input: '$videos',
            as: 'video',
            cond: {$eq: ['$$video.flg_process', false]}
          }
        }
      }
    },
        {$match:{ 'videos.0': {$exists: true}
      }
    }])

    if(arena != ""){
      res.status(200).json({message: "Existem videos para processamento", processar:arena})
    }
    
    if(arena == ""){
      
      res.status(200).json({message: "Não existem vídeos para processar"})
      
    }


  } catch (error) {

    console.log(error.message)
    
    res.status(400).json({message: "O servidor não pode processar essa requisição"})
  }




};

module.exports = getVideosNaoProcessados