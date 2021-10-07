const express = require('express');
const path = require('path'); // chemin des fichiers
const helmet = require('helmet'); // securise les headers http
const cors = require('cors'); // sécurise l'intéraction entre les 2 url
require('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const likeRoutes = require('./routes/like');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Security & data
app.use(helmet());
app.use(cors());

//configuration des headers 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

// gestion des erreurs try catch
try {
    // gestionnaire de routage qui indique à Express de gérer les ressources images de manière statique
    app.use('/images', express.static(path.join(__dirname, 'images')));

    //Routes
    app.use('/api/users', userRoutes);
    app.use('/api/posts', postRoutes);
    app.use('/api/posts', commentRoutes);
    app.use('/api/posts', likeRoutes);

} catch (e) {
    console.error(e);
}

module.exports = app;