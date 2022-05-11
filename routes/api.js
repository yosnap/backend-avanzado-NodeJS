const multer = require('multer');
const { Router } = require('express');
const { getAnuncios , createAnuncio } = require('../controllers/anuncios');
const { signIn, signUp } = require('../controllers/users');
const Auth = require('../middlewares/AuthMiddleware');
const storage = require('../services/storage');

const upload = multer({storage});

const api = Router();

api.get('/anuncios',Auth,getAnuncios);
api.post('/anuncio',Auth,upload.single('imagen'),createAnuncio);
api.post('/login',signIn);
api.post('/signup',signUp);

module.exports = api;
