const Arena = require('../models/Arena');


const updateVideosArenaCtrl = async (req, res) => {

  try {

    const { bt_num, process_time, link, flg_process, macDvr, flgRotate } = req.body;

    const time = process_time.split(" ");
    const date = time[0];
    const hour = time[1];

    
    
    const arenaExists = await Arena.findOne({ macDvr });
    

    if (!arenaExists) {
      return res.status(404).json({ message: "Arena não encontrada!" });
    };

    if (!macDvr) {
      return res.status(404).json({ message: "Favor cadastrar mac adress DVR" })
    };

    const video = {
      bt_num,
      process_time,
      date,
      hour,
      link,
      flg_process,
      macDvr, 
      flgRotate,           
      arena:arenaExists._id
    };

      const updateVideos = await Arena.findOneAndUpdate({macDvr}, 
        
        {$push: {videos: video}},
        {new:true}
      );
      
    if(!updateVideos){
      return res.status(404).json({message: 'Item não encontrado'})
    };    

    res.status(201).json({ message: "Video incluído com sucesso" })

  } catch (error) {
    
      console.log(error.message);

      res.status(500).json({ message: "Não foi possível incluir o vídeo", success: false })
  };

};



module.exports = updateVideosArenaCtrl;