
const nodemailer = require('nodemailer');
require('dotenv').config( );

const mailSender = async (emailUser, tempPass) => {

  // const tempPass = () => {
    
  //   return Math.floor(Math.random() * (9999 -1000) + 1000)
    
  // }
    // const tempPass = Math.floor(Math.random() * (9999 -1000) + 1000)
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
      text: tempPass
    });

    console.log(info.messageId)

  };

  module.exports = mailSender