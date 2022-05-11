const { Schema , model } = require('mongoose');

const Anuncio = new Schema({
    nombre:{ type:String , required:true , unique:true },
    venta:{ type:Boolean , default:false },
    precio:{type:Number,required:true,min:0},
    imagen:{type:String,required:true,unique:true},
    tags:[{type:String,enum:['work','lifestyle','motor','mobile']}]
});

module.exports = model('Anuncio',Anuncio);