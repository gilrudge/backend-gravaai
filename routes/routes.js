const express = require('express');
const router = express.Router()



const createUserCtrl = require('../controller/createUserCtrl');
const loginUserCtrl = require('../controller/loginUserCtrl');
const userPrivateRouteCtrl = require('../controller/userPrivateRouteCtrl');
const checkToken = require('../utils/checkToken');
const createArenaCtrl = require('../controller/createArenaCtrl');
const updateVideosArenaCtrl = require('../controller/updateVideosArenaCtrl');
const getArenasInfoCtrl = require('../controller/getArenasInfoCtrl');
const deleteVideoArenaCtrl = require('../controller/deleteVideoArenaCtrl');
const deleteArenaCtrl = require('../controller/deleteArenaCtrl');
const getSelectedArenaCtrl = require('../controller/getSelectedArenaCtrl');
const limpaVideosAntigosCtrl = require('../controller/limpaVideosAntigosCtrl');
const createNewPassCtrl = require('../controller/createNewPassCtrl');
const getHomeCtrl = require('../controller/getHomeCtrl');
const resetSenhaCtrl = require('../controller/resetSenhaCtrl');
const getLoginCtrl = require('../controller/getLoginCtrl');
const getRegisterCtrl = require('../controller/getRegisterCtrl');
const getPassRecoverCtrl = require('../controller/getPassRecoverCtrl');
const getPaginaArenasCtrl = require('../controller/getPaginaArenasCtrl');
const getVideosNaoProcessados = require('../controller/getVideosNaoProcessados')
//Public routes
router.get('/', getHomeCtrl);
router.get('/login', getLoginCtrl);
router.get('/register', getRegisterCtrl);
router.get('/pagina-arenas', checkToken, getPaginaArenasCtrl);
router.get('/pass-recover', getPassRecoverCtrl);
router.post('/auth/register', createUserCtrl);
router.post('/auth/login', loginUserCtrl);
router.get('/auth/pass-recover', createNewPassCtrl);
router.post('/reset-senha', resetSenhaCtrl);

//Private route users
// router.get('/user/:id', checkToken, userPrivateRouteCtrl);
// router.get('/arenas', getArenasCtrl);
router.get('/arenas', checkToken, getArenasInfoCtrl);
// router.get('/arenas', checkToken);
router.get('/arena/:idArena', checkToken, getSelectedArenaCtrl)


//Private routes admin
router.post('/cadastro-arena', createArenaCtrl);
router.delete('/exclui-arena/:idArena', deleteArenaCtrl);
router.put('/grava-lances', updateVideosArenaCtrl);
router.delete('/exclui-lances/:idArena/:idVideo', deleteVideoArenaCtrl);
router.get('/limpa-videos', limpaVideosAntigosCtrl);
router.get('/videos-np', getVideosNaoProcessados);








module.exports = router