const path = require('path');

const getPassRecoverCtrl = (req, res) => {

  try {

    res.status(200).sendFile(path.join(__dirname,'../front-teste','recuperar-senha.html'));
    
  } catch (error) {
      console.log(error.message)

      res.status(500).json({message: "Ocorreu um erro na solicitação"})
  }

};


module.exports = getPassRecoverCtrl