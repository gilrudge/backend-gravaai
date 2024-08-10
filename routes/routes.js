const express = require('express');
const router = express.Router()


const createUser = require('../controller/createUserCtrl');
// const loginUser = require('../controller/loginUserCtrl');
const loginUserCtrl = require('../controller/loginUserCtrl');
const userPrivateRouteCtrl = require('../controller/userPrivateRouteCtrl');
const checkToken = require('../utils/checkToken');
const createArenaCtrl = require('../controller/createArenaCtrl');
const updateVideosArenaCtrl = require('../controller/updateVideosArenaCtrl');
const getArenasCtrl = require('../controller/getArenasCtrl');



router.post('/auth/register', createUser);
router.post('/auth/login', loginUserCtrl);

//Private route
router.get('/user/:id', checkToken, userPrivateRouteCtrl);
router.get('/arenas',checkToken, getArenasCtrl);
//Arenas
router.post('/cadastro-arena', createArenaCtrl);
router.put('/lances',updateVideosArenaCtrl);
router.get('/arenas',getArenasCtrl);


module.exports = router