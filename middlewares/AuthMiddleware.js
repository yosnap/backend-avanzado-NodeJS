const jwt = require('jwt-simple');
const date = require('date.js');
require('dotenv').config();
const secret = process.env.SECRET;

const AuthMiddleware = (req,res,next) => {
    if(!req.headers.authorization) return res.status(401).send({message:'Sin cabeceras de autenticación'});
    try {
        const token = req.headers.authorization.split(' ')[1];
        const payload = jwt.decode(token,secret);
        if(date(payload.exp) < date()) return res.status(401).send({message:'Su sesión expiró'})
        req.user = payload.sub;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = AuthMiddleware;
