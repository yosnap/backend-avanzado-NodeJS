const path = require('path');
const cote = require('cote');
const jimp = require('jimp');

const root = path.dirname(__dirname);
const imgDir = path.join(root + '/public/images/thumbnails/')

const service = new cote.Responder({name:'resizer service'});
const client = new cote.Requester({name:'resizer client'});

service.on('resize',async (req , cb) => {
    const name = 'thumb'+ req.id +'.jpg';
    try {
        const image = await jimp.read(req.file.path);
        await image.resize(100,100)
        .quality(60)
        .write(imgDir + name);
        cb(null,{imagen:'/thumbnails/'+name});
    } catch (error) {
        cb(error,null)
    }
});

module.exports = client;