const User = require('../models/User')
const bcrypt = require('bcrypt');



//Register User
const createUserCtrl = async (req, res) => {

  const isEmailValid = require('../utils/isEmailValid');

  const { name, email, password, confirmPassword } = req.body;

 
  try {

    //validation
    //inserir login SSO
    const checkEmail = isEmailValid(email);
    

    if (!name) {
      return res.status(422).json({ message: 'O nome é obrigatório' })
    };

    if (name.length > 20) {
      return res.status(422).json({ message: 'O nome digitado é muito grande' })
    };

    if (!email) {
      return res.status(422).json({ message: 'O email é obrigatório' })
    };

    if (!checkEmail) {
      return res.status(422).json({ message: 'Favor digitar um email válido' })
    };

    if (!password) {
      return res.status(422).json({ message: 'O password é obrigatório' })
    };

    if (password.length < 4) {
      return res.status(422).json({ message: 'A senha deve conter mais de 4 caracteres' })
    };

    if (password !== confirmPassword) {
      return res.status(422).json({ message: 'As senhas não conferem' })
    };

    //Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(422).json({ message: 'Esse email já está cadastrado, favor utilizar outro email' })
    };

    //create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //create user
    const user = new User({
      name,
      email,
      password: passwordHash
    });

      await user.save();

      res.status(201).json({ message: 'Usuário criado com sucesso!', success: true });

  } catch (error) {

      console.log(error.message);
      
      res.status(500).json({ message: error });
  };

};

module.exports = createUserCtrl