const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).send({message: 'Acesso restrito'})
    }

    jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({message: 'Token inválido'});
        }
        //verifica no token se o usuario possui permissãod e admin
        if(!decoded.roles.includes('admin')){
            return res.status(401).send({message: 'Acesso restrito para admin'});
        }
           
        req.userId = decoded.id;
        req.roles = decoded.roles;
        return next();
    });

};