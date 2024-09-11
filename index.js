const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config( );


const app = express();

//Router
const routes = require('./routes/routes');


//config json
app.use(express.json())


app.use(cors())


app.use('/', routes)

//DB Connection
// const DB_URL = process.env.DB_URL
const DB_URL = process.env.ME_CONFIG_MONGODB_URL
mongoose.connect(DB_URL).then(() => {
  app.listen(process.env.PORT,()=> {
    console.log(`Aplicação rodando na porta ${process.env.PORT} e conectada ao Banco de Dados`)
  } );
}).catch((err) => console.log(err))
