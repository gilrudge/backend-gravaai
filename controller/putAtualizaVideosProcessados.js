const Arena = require('../models/Arena');



const putAtualizaVideosProcessados = async (req, res) => {
  
  try {
    

    const { idArena, idVideo, bt_num, process_time, link, flg_process, macDvr } = req.body;

    console.log(req.body)

    const arenaExists = await Arena.findById(idArena);
    
    if(!arenaExists){
      return res.status(404).json({message: "Arena não encontrada "})
    };

    const updatedVideo = await Arena.findOneAndUpdate(
      {_id: idArena, 'videos._id': idVideo},
    
      {
        $set:{
          'videos.$.bt_num':bt_num,
          'videos.$.process_time': process_time,
          'videos.$.flg_process':flg_process,
          'videos.$.macDvr':macDvr,
          'videos.$.link':link
        } 
      });


      res.status(200).json({message: "Video atualizado com sucesso", video: idVideo});



  } catch (error) {
    
    console.log(error.message);

    res.status(500).json({message: "Não foi possível atualizar o vídeo", success: false});

  }

};


module.exports = putAtualizaVideosProcessados;