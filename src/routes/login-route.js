const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

//autentica usuario
router.post('/', async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(!user){
        return res.status(400).send({message: 'User não encontrado'});
    }
    
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({message: 'Password inválido'}); 
    }

    user.password = undefined;
    const token = jwt.sign({ id : user.id, roles: user.roles}, authConfig.secret, {expiresIn: 86400});
    return res.status(200).send({user, token});

});

module.exports = router;