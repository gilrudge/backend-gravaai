const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config( );


const app = express();

//Router
const routes = require('./routes/routes');


//config json
app.use(express.json())



//Open route
app.get('/', (req,res) => {
  res.status(200).json({message: "Rota API funcionando"})
});


app.use('/', routes)

//DB Connection
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL).then(() => {
  app.listen(process.env.PORT,()=> {
    console.log(`Aplicação rodando na porta ${process.env.PORT} e conectada ao Banco de Dados`)
  } );
}).catch((err) => console.log(err))
