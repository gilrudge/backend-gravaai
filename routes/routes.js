const express = require('express');
const router = express.Router()



const createUser = require('../controller/createUserCtrl');
const loginUserCtrl = require('../controller/loginUserCtrl');
const userPrivateRouteCtrl = require('../controller/userPrivateRouteCtrl');
const checkToken = require('../utils/checkToken');
const createArenaCtrl = require('../controller/createArenaCtrl');
const updateVideosArenaCtrl = require('../controller/updateVideosArenaCtrl');
const getArenasCtrl = require('../controller/getArenasCtrl');
const deleteVideoArenaCtrl = require('../controller/deleteVideoArenaCtrl');
const deleteArenaCtrl = require('../controller/deleteArenaCtrl');
const getSelectedArenaCtrl = require('../controller/getSelectedArenaCtrl');
const limpaVideosAntigosCtrl = require('../controller/limpaVideosAntigosCtrl');
const recuperaSenhaCtrl = require('../controller/recuperaSenhaCtrl');
const getHome = require('../controller/getHome');

//Public routes
router.get('/', getHome);
router.post('/auth/register', createUser);
router.post('/auth/login', loginUserCtrl);

//Private route users
// router.get('/user/:id', checkToken, userPrivateRouteCtrl);
router.get('/arenas',checkToken, getArenasCtrl);
router.get('/arenas/:idArena',checkToken, getSelectedArenaCtrl);


//Private routes admin
router.post('/cadastro-arena', createArenaCtrl);
router.delete('/exclui-arena/:idArena', deleteArenaCtrl);
router.put('/grava-lances',updateVideosArenaCtrl);
router.delete('/exclui-lances/:idArena/:idVideo', deleteVideoArenaCtrl);
router.get('/limpa-videos', limpaVideosAntigosCtrl);
router.get('/recupera-senha', recuperaSenhaCtrl);








module.exports = router