const Arena = require('../models/Arena');


const getArenasInfoCtrl = async (req, res) => {

  try {
    
    
    const arena = await Arena.aggregate([{
      $project: {
        _id: 1,
        nomeArena: 1,
        videos: {
          $filter: {
            input: '$videos',
            as: 'video',
            cond: { $eq: ['$$video.flg_process', true] }
          }
        }
      }
    },
    {
      $match: {
        'videos.0': { $exists: true }
      }
    }]);


    res.status(200).json({ arenas: arena });

    

  } catch (error) {

    console.log(error.message);

    res.status(500).json({ message: "Ocorreu um erro na requisição para o servidor, tente novamente." })

  };

};


module.exports = getArenasInfoCtrl;