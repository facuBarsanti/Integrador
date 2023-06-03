const login = require('../Controllers/login');
const getCharById = require('../Controllers/getCharById');
const postFav = require('../Controllers/postFav');
const postUser = require('../Controllers/postUser');
const deleteFav = require('../Controllers/deleteFav');

const router = require('express').Router();


router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/login', postUser);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports = router;