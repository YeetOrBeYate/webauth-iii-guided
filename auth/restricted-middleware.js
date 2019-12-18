const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
const token = req.body.token;
const auth = req.headers.auth;
console.log(auth)
const secret= "secret phrase";
    jwt.verify(auth,secret,(err)=>{
      if(err){
        res.status(500).json({err})
      }else{
        next();
      }
    } )
};
