const RecupPass = require('../models/RecupPass');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const crypto = require('crypto');
// const mailSender = require('../utils/mailSender');
const nodemailer = require('nodemailer');
require('dotenv').config()


const recuperaSenhaCtrl = async (req, res) => {
  
  try {
    
    const {email} = req.body
    
    const user = await User.findOne({email})
    
    if(!user){

      return res.status(404).json({message: "Usuário não encontrado"})

    };

    const token = crypto.randomBytes(20).toString('hex');
    const now = new Date();
    now.setHours(now.getHours() + 1).toLocaleString();

    await User.findByIdAndUpdate(user._id, {
      '$set': {
        passwordResetToken: token,
        passwordReserEpires: now,
      }
    });

    

    const mailOptions = {
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_APP_PASSWORD
      }
    };

    const transporter = nodemailer.createTransport(mailOptions);

    const info = await transporter.sendMail({

      from:`"Gravaai" <${process.env.EMAIL_USER}>`,
      to: email,
      subject:'Esqueci minha senha Gravaai - Senha temporária',
      text: `Sua senha temporária é ${token}`
    }, (err) =>{
      if(err){
        return res.status(400).json({message: "Não foi possível enviar o email de recuperação de senha"});
      }
      res.status(200).json({message: "Email enviado com sucesso", token});
    });

    

 

    res.status(200).json({message:`Email enviado para ${email}`});
  
} catch (error) {
    
    console.log(error.message);

  }

};


module.exports = recuperaSenhaCtrl
