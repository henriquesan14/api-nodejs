'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authMiddleware = require('../middlewares/auth-admin');

router.use(authMiddleware);
//busca todos usuarios
router.get('/', async (req,res) => {
    try{
        const users = await User.find();
        return res.status(200).send({users});
    }catch(err){
        return res.status(400).send({message: 'Error ao buscar users'});
    }
});

//busca um usuario
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        return res.status(200).send({user});
    }catch(err){
        return res.status(401).send({message: "Error ao buscar user"})
    }
});

//cadastra um usuario
router.post('/', async (req, res) => {
    const {username} = req.body;
    try{
        if(await User.findOne({username})){
            return res.status(400).send({message: 'User já existe'});
        }
        const user = await User.create(req.body);
        user.password = undefined;
        return res.status(201).send({user});
    }catch(err){
        res.status(400).send({message: 'Error ao cadastrar user'});
    }
});



//edita um usuario
router.put('/:id', async (req, res) => {
    const {username} = req.body;
    try{
        if(await User.findOne({username})){
            return res.status(400).send({message: 'User já existe'});
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        user.password = undefined;
        return res.status(201).send({user});
    }catch(err){
        res.status(400).send({message: 'Error ao cadastrar user'});
    }   
});

//deleta um usuario
router.delete('/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.id);
        return res.status(200).send();
    }catch(err){
        return res.status(401).send({message: "Error ao deletar user"})
    }
});

module.exports = router;