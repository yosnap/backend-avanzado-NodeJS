const User = require('../models/User');
const { createToken } = require('../services/auth');
const { setPassword , checkPassword } = require('../services/passwords');

const signUp = async (req,res,next) => {
    try {
        const { email , password } = req.body;
        const secured = await setPassword(password);
        const user = new User({email,password:secured});
        await user.save();
        const token = createToken(user);
        return res.status(200).send({ok:true,message:'Usuario registrado',token});
    } catch (error) {
        next(error);
    }
}

const signIn = async (req,res,next) => {
    try {
        const { email , password } = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(401).send({message:'Usuario no encontrado'});
        const valid = await checkPassword(password,user.password);
        if(!valid) return res.status(401).send({message:'Contraseña inválida'});
        return res.status(200).send({ok:true,user,token:createToken(user)});
    } catch (error) {
        next(error);    
    }
}

module.exports = {
    signIn,
    signUp
}