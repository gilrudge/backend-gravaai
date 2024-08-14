const Arena = require('../models/Arena');


const limpaVideosAntigos = async () =>{

  const idArenas = await Arena.findOne()

  return console.log(idArenas)

};


limpaVideosAntigos()