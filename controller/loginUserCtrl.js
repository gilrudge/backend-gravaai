const User = require('../models/User');
const path = require('path')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUserCtrl = async (req, res) => {

  try {

    const { email, password } = req.body

    if (!email) {
      return res.status(422).json({ message: 'O email é obrigatório' })
    };

    if (!password) {
      return res.status(422).json({ message: 'O password é obrigatório' })
    };

    //Check if user exists
    const user = await User.findOne({ email }).select('+password');


    if (!user) {
      return res.status(404).json({ message: 'Usuário e/ou senha inválidos!' })
    };

    //Check password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(404).json({ message: 'Usuário e/ou senha inválidos!', success: false })
    };

    const secret = process.env.SECRET;

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: 3600 });


    res.status(200)
      .json({ message: 'Autenticação realizada com sucesso', token: token, name: user.name });


  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Aconteceu um erro no servidor, tente novamente mais tarde!' })

  }

};

module.exports = loginUserCtrl;