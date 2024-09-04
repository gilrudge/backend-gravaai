const User = require('../models/User')
const crypto = require('crypto');
const mailSender = require('../services/mailSender');



const createNewPassCtrl = async (req, res) => {
  
  try {
    
    const {email} = req.body
    
    const user = await User.findOne({email})
    
    if(!user){
     return res.status(404).json({message: "Usuário não encontrado"})
    };

    const token = crypto.randomBytes(3).toString('hex').toUpperCase();
    const now = new Date();
    now.setHours(now.getHours() + 1).toLocaleString();

    await User.findByIdAndUpdate(user._id, {

      '$set': {
        passwordResetToken: token,
        passwordResetExpires: now,
      }
    });

    
    mailSender(email,token, (err) => {

      if(err){
        return res.status(400).json({message: "Não foi possível enviar o email de recuperação de senha"})      
      };

      res.status(200).json({message: "Email enviado com sucesso", success:true});
    });
    
    res.status(200).json({message:`Email enviado para ${email}`, success:true});
  
} catch (error) {
    
    console.log(error.message);

    res.status(500).json({message: "Não foi possível enviar o email tente novamente", success: false})

  };

};


module.exports = createNewPassCtrl
