const express = require('express');
const router = express.Router()



const createUserCtrl = require('../controller/createUserCtrl');
const loginUserCtrl = require('../controller/loginUserCtrl');
const checkToken = require('../utils/checkToken');
const createArenaCtrl = require('../controller/createArenaCtrl');
const updateVideosArenaCtrl = require('../controller/updateVideosArenaCtrl');
const getArenasInfoCtrl = require('../controller/getArenasInfoCtrl');
const deleteVideoArenaCtrl = require('../controller/deleteVideoArenaCtrl');
const deleteArenaCtrl = require('../controller/deleteArenaCtrl');
const getSelectedArenaCtrl = require('../controller/getSelectedArenaCtrl');
const limpaVideosAntigosCtrl = require('../controller/limpaVideosAntigosCtrl');
const createNewPassCtrl = require('../controller/createNewPassCtrl');
const resetSenhaCtrl = require('../controller/resetSenhaCtrl');
const getVideosNaoProcessados = require('../controller/getVideosNaoProcessados');
const putAtualizaVideosProcessados = require('../controller/putAtualizaVideosProcessados')



//Public routes
router.post('/auth/register', createUserCtrl);
router.post('/auth/login', loginUserCtrl);
router.post('/auth/pass-recover', createNewPassCtrl);
router.post('/reset-pass', resetSenhaCtrl);

//Private route users
router.get('/arenas', checkToken, getArenasInfoCtrl);
router.get('/arena/:idArena', checkToken, getSelectedArenaCtrl);


//Private routes admin
router.post('/cadastro-arena', createArenaCtrl);
router.delete('/exclui-arena/:idArena', deleteArenaCtrl);
router.put('/grava-lances', updateVideosArenaCtrl);
router.delete('/exclui-lances/:idArena/:idVideo', deleteVideoArenaCtrl);
router.get('/limpa-videos', limpaVideosAntigosCtrl);
router.get('/videos-np', getVideosNaoProcessados);
router.put('/videos-p', putAtualizaVideosProcessados);


module.exports = router;