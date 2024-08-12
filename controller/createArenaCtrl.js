const Arena = require('../models/Arena');

const createArenaCtrl = async(req,res) => {

  const {nomeArena, cnpj, macDvr, pais, estado, cidade, bairro, endereco} = req.body;

  const arenaExists = await Arena.findOne({cnpj});

  if (arenaExists){
    return res.status(422).json({message: "Essa arena já está cadastrada!"});
  };

  if(!macDvr){
    return res.status(404).json({message: "Favor cadastrar mac adress DVR"})
  };

  const dvrCadastrado = await Arena.findOne({macDvr});

  if(dvrCadastrado){
    return res.status(422).json({message: "Esse equipamento já está cadastrado"})
  }

  const arena = new Arena({

    nomeArena,
    cnpj,
    macDvr,
    pais,
    estado,
    cidade,
    bairro,
    endereco,
  
  });

  try {
    
    await arena.save();

    res.status(201).json({message: "Arena criada com sucesso!"});

  } catch (error) {

      console.log(error);

      res.status(500).json({message:error});
  };

};

module.exports = createArenaCtrl;