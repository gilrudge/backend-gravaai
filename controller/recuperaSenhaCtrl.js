const RecupPass = require('../models/RecupPass');
const User = require('../models/User')
const bcrypt = require('bcrypt');
// const mailSender = require('../utils/mailSender');
const nodemailer = require('nodemailer')
require('dotenv').config()


const recuperaSenhaCtrl = async (req, res) => {
  
  try {
    
    const {emailUser, tempPass} = req.body
    
    const checkEmailExists = await User.findOne({email:emailUser})
    
    if(!checkEmailExists){

      return res.status(404).json({message: "Usuário não encontrado"})

    };

    const name = checkEmailExists.name
    const tempPassString = tempPass.toString()
    const salt = await bcrypt.genSalt(12);
    const tempPassHash = await bcrypt.hash(tempPassString, salt)

    const recuperarSenha = new RecupPass({

      name,
      email: emailUser,
      tempPass:tempPassHash

    });

    recuperarSenha.save()


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
      to: emailUser,
      subject:'Esqueci minha senha Gravaai - Senha temporária',
      text: `Sua senha temporária é ${tempPass}`
    });

    

 

    res.status(200).json({message:`Email enviado para ${emailUser}`});
  
} catch (error) {
    
    console.log(error.message);

  }

};


module.exports = recuperaSenhaCtrl
