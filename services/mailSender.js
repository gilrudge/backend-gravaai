
const nodemailer = require('nodemailer');
require('dotenv').config( );

// const mailSender = async (email, token, callback) => {
const mailSender = (email, token, callback) => {


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

    // const info = await transporter.sendMail({
    transporter.sendMail({

      from:`"Gravaai" <${process.env.EMAIL_USER}>`,
      to: email,
      subject:'Esqueci minha senha Gravaai - Senha temporária',
      text: `Sua senha temporária é ${token}`
    },callback);   

  };

  module.exports = mailSender