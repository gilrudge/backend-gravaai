const getLoginRedirect = async (req, res, next) => {

  try {
    console.log('batata')
   return await res.redirect('http://127.0.0.1:3000/pagina-arenas')
    


  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: "Não foi possível redirecionar"})
  }
};


module.exports = getLoginRedirect