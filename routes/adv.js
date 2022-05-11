const { Router } = require('express');
const { anunciosQuery } = require('../controllers/anuncios');

const adv = Router();

adv.get('/', async (req, res, next) => {
    try {
        const {query} = req;
        const args = {...query};
        const resp = await anunciosQuery(args);
        if(resp.total === 0) return res.render('empty');
        return res.render('anuncios',{total:resp.total,anuncios: resp.result.rows});
    } catch(err){
        return next(err); 
    }
});

module.exports = adv;