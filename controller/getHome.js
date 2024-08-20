

const getHome = ( req, res ) => {

  res.status(200)
     .sendFile('/Users/gilbl/Documents/Programação/gravaai/backend-gravaai/front-teste/index.html')
    //  .json({message: "Home enviada"})

};  


module.exports = getHome