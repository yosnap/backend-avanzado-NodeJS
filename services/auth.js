const jwt = require('jwt-simple');
const date = require('date.js');
require('dotenv').config();

const secret = process.env.SECRET;

exports.createToken = (user) => {
    const payload = { sub : user._id , exp: date('in 10 minutes') , iat: date() }
    const token = jwt.encode(payload,secret);
    return token;
}