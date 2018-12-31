'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb://henrique:rico784512@ds036069.mlab.com:36069/api-node', 
{
    useCreateIndex :  true ,
     useNewUrlParser: true });

//carrega os models


//carrega as rotas
const indexRoute = require('./routes/index-route'); 
const userRoute = require('./routes/user-route');
const loginRoute = require('./routes/login-route');
const playlistRoute = require('./routes/playlist-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token','Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/users',userRoute);
app.use('/playlists', playlistRoute);
app.use('/login', loginRoute);


module.exports = app;