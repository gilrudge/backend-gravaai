const Arena = require('../models/Arena');
const Video = require('../models/Video');

const updateVideosArenaCtrl = async (req, res) => {

  const {bt_num, process_time, link, flg_process, macDvr} = req.body;

  const arenaExists = await Arena.findOne({macDvr});
  console.log(arenaExists)

  if(!arenaExists){
    return res.status(404).json({message: "Arena não encontrada!"});
  };

  if(!macDvr){
    return res.status(404).json({message: "Favor cadastrar mac adress DVR"})
  };
    
  const video = new Video({
    bt_num,
    process_time,
    link,
    flg_process,
    macDvr
  });

  arenaExists.videos.push(video);
  
  try {
    
    arenaExists.save()

    res.status(201).json({message: "Video incluído com sucesso"})

  } catch (error) {
      console.log(error);
      res.status(500).json({message:error})
  }

};



module.exports = updateVideosArenaCtrl