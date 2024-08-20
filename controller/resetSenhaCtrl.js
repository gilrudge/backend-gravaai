const User = require('../models/User');
const bcrypt = require('bcrypt');



const resetSenhaCtrl = async (req, res) => {
  try {

    const {email, tokenTemp, password} = req.body

    const user = await User.findOne({email}).select('+passwordResetToken passwordResetExpires');

    if (!user) {
      return res.status(404).json({ message: 'Usuário não cadastrado' })
    };
  
    if(tokenTemp !== user.passwordResetToken){
      return res.status(400).json({message: "Token inválido"})
    };


    const now = new Date();

    if (now > user.passwordReserExpires){
      return res.status(400).json({message: "Token expirado, favor gerar um novo token"})
    };

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    user.password = passwordHash
    await user.save();

    res.status(200).json({message: "Senha alterada com sucesso"})


    
  } catch (error) {
      console.log(error.message)
      res.status(404).json({message: "Ocorreu um erro ao resetar a senha"})
  }

};



module.exports = resetSenhaCtrl