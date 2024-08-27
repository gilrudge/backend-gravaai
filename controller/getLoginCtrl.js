const path = require('path');

const getLoginCtrl = (req, res) => {

  try {
    
    res.status(200).sendFile(path.join(__dirname, '../front-teste', 'login.html'));


  } catch (error) {
      console.log(error.message)

      res.status(500).json({message: "Erro na solicitação"})
  }

};


module.exports = getLoginCtrl