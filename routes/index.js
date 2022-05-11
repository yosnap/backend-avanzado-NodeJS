const { Router } = require('express');

const api = require('./api');
const adv = require('./adv');

const { readFile } = require('fs');
const path = require('path');
const readmeUrl = path.join(__dirname, '../README.md');
const leemeUrl = path.join(__dirname, '../LEEME.md');

const router = Router();

router.use('/api',api);
router.use('/anuncios',adv);
router.get('/', async (req,res) => {
  try {
    const readme = await new Promise((resp,reje) => readFile(readmeUrl,'utf8',(err,doc) => err ? reje(err) : resp(doc)));
    const leeme = await new Promise((resp,reje) => readFile(leemeUrl,'utf8',(err,doc) => err ? reje(err) : resp(doc)));
    return res.render('index',{readme,leeme});
  } catch (error) {
    return res.render('error',{error,message:'Error del servidor'});
  }
});

router.get('/tags',(req,res) => {
  const tags = [
    {id:1,name:'work'},
    {id:2,name:'mobile'},
    {id:3,name:'lifestyle'},
    {id:4,name:'motor'}]
    res.render('tags',{tags})
})

router.get('/test',async (req, res) => {
  return res.status(200).json({message: 'pass!'});
})

module.exports = router;