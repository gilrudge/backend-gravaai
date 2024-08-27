const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config( );


const app = express();

//Router
const routes = require('./routes/routes');


//config json
app.use(express.json())



//Config Cors
// app.use(cors({
//   origin: 'http://127.0.0.1:3000', // Ou o domínio da sua aplicação frontend
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Se você precisar enviar cookies junto com as requisições
//   allowedHeaders: 'Content-Type,Authorization'
// }))
app.use(cors())


app.use('/', routes)

//DB Connection
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL).then(() => {
  app.listen(process.env.PORT,()=> {
    console.log(`Aplicação rodando na porta ${process.env.PORT} e conectada ao Banco de Dados`)
  } );
}).catch((err) => console.log(err))
