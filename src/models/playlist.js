'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    musicas: [{
        type: String,
        required: true
    }]
      
});

module.exports = mongoose.model('Playlist', schema);