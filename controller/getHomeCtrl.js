const path = require('path')

const getHomeCtrl = ( req, res ) => {

  try {

    res.status(200).sendFile(path.join(__dirname,'../front-teste', 'index.html'))
    
  } catch (error) {


    res.status(500).json({message: "Erro na solicitação"})
  }
    
  
    
    
     

};  


module.exports = getHomeCtrl