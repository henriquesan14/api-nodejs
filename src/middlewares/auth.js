const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).send({message: 'Acesso restrito'})
    }

    jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
        if(err){
            res.status(401).send({message: 'Token inválido'});
        }
        req.userId = decoded.id;
        return next(); 
    });

};