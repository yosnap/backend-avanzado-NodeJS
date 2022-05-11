const mongoose = require('mongoose');
const Anuncio = require('../models/Anuncio');
const User = require('../models/User');
const data = require('./initData.json');
const { setPassword } = require('./passwords');
const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');

const root = path.dirname(__dirname);
const thumbsDir = path.join(root + '/public/images/thumbnails');
const uploadsDir = path.join(root + '/public/images/uploads');

let defaultUser = {
    email:'user@example.com'
}

const initDb = async () => {
    try {
        await fs.mkdir(uploadsDir,err => err);
        await fs.mkdir(thumbsDir,err => err);
        await Anuncio.insertMany(data);
        defaultUser.password = await setPassword('1234');
        const user = new User(defaultUser);
        await user.save();
        console.log('La base de datos ha sido inicializada');
        return;
    } catch (error) {
        throw error;
    }
};

const cleanDb = async () => {
    try {
        await rimraf(uploadsDir,['rmdir'],err => err);
        await rimraf(thumbsDir,['rmdir'],err => err);
        const def = await User.findOne({email:defaultUser.email});
        const docs = await Anuncio.find();
        if(docs.length !== 0) await Anuncio.deleteMany();
        if(!!def) await User.deleteMany();
        console.log('Se ha depurado la base de datos');
        return;
    } catch (error) {
        throw error;
    }
};

(async () => {
    console.log('Configurando base de datos');
    console.log('---------------------------');
    console.log('\n');
    try {
        await mongoose.connect('mongodb://localhost/nodepop');
        await cleanDb();
        await initDb();
        process.exit();
    } catch (error) {
        console.log(error);
    }
})();