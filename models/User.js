const { model , Schema } = require('mongoose');


const User = new Schema({
    email:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,requiredd:true}
});

module.exports = model('User',User);