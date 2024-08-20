const RecupPass = require('../models/RecupPass');
const User = require('../models/User')
// const mailSender = require('../utils/mailSender');
const nodemailer = require('nodemailer')
require('dotenv').config()


const recuperaSenhaCtrl = async (req, res) => {
  

  try {

    const {emailUser, tempPass} = req.body


    const checkEmailExists = await User.findOne({emailUser})

    console.log(checkEmailExists)




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

    console.log(info.messageId)

 

    res.status(200).json({message:`Email enviado para ${emailUser}`, emailUser});
  
} catch (error) {
    
    console.log(error.message);

  }

};


module.exports = recuperaSenhaCtrl
