'use strict';
const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);
//busca todas playlists
router.get('/', async (req,res) => {
    try{
        const playlists = await Playlist.find();
        return res.status(200).send({playlists});
    }catch(err){
        return res.status(400).send({message: 'Error ao buscar playlists'});
    }
});

//busca uma playlist
router.get('/:id', async (req, res) => {
    try{
        const playlist = await Playlist.findById(req.params.id);
        return res.status(200).send({playlist});
    }catch(err){
        return res.status(401).send({message: "Error ao buscar playlist"})
    }
});

//cadastra uma playlist
router.post('/', async (req, res) => {
    try{
        const playlist = await Playlist.create(req.body);
        return res.status(201).send({playlist});
    }catch(err){
        res.status(400).send({message: 'Error ao cadastrar playlist',
    "error":err});
    }
});



//edita uma playlist
router.put('/:id', async (req, res) => {

    try{
        const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).send({playlist});
    }catch(err){
        res.status(400).send({message: 'Error ao cadastrar playlist'});
    }   
});

//deleta uma playlist
router.delete('/:id', async (req, res) => {
    try{
        const playlist = await Playlist.findByIdAndRemove(req.params.id);
        return res.status(200).send();
    }catch(err){
        return res.status(401).send({message: "Error ao deletar playlist"})
    }
});

module.exports = router;