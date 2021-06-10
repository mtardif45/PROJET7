const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Security & data
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// gestionnaire de routage qui indique à Express de gérer les ressources images de manière statique
app.use('/images', express.static(path.join(__dirname, 'images')));


//Routes
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);


module.exports = app;