// const express = require('express');
const jwt = require('jsonwebtoken');


const checkToken = (req, res, next) => {
    
  try{
    
    
    const authorization = req.headers['authorization']
    const token = authorization && authorization.split(' ')[1];
    console.log('Authorization Header:', authorization);
    console.log('Token:', token);
  
 
  
  

    if(!token){
            return  res.status(401).json({message: 'Acesso Negado, favor realizar o login no checktoken'})
    };
    
    

    jwt.verify(token, process.env.SECRET, (err, decoded) => {

      if(err) {
        return res.status(401).json({error: "Token Invalido, favor se logar novamente"});
      };
      req.userId = decoded.id;
      
      return next()     
    })

    
    
    
      
      
  }catch(err){
    console.log(err.message)
    res.status(400).json({message: 'Token inválido, favor se logar novamente!'});
    
    
  }
};

module.exports = checkToken;