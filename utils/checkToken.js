const express = require('express');
const jwt = require('jsonwebtoken');


const checkToken = (req, res, next) => {
  
  try{
 
  const {token} = req.headers

    if(!token){
      return res.status(401).json({message: 'Acesso Negado, favor realizar o login'})
    };
    

    const secret = process.env.SECRET

    jwt.verify(token, secret)

    next()
    
  }catch(err){
    console.log(err)
    res.status(400).json({message: 'Token inválido, favor se logar novamente!'})
    // res.redirect(301,'auth/login')
    // next()
  }
};

module.exports = checkToken