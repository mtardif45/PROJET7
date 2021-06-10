const fs = require('fs'); // package permettant la modification du système de fichiers
const db = require("../database_connect"); // import de la bdd

// ajouter une publication
exports.createPost = async (req, res) => {
    db.query(`INSERT INTO posts VALUES (NULL, '${req.body.userId}', '${req.body.title}', NOW(), '${req.body.content}')`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(201).json({
            message: 'Votre post à été publié !'
        })
    });
};

// récupérer une publication
exports.getOnePost = async (req, res) => {
    db.query(`SELECT * FROM posts WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};

// voir toutes les publications 
exports.getAllPosts = async (req, res) => {
    db.query('SELECT users.nom, users.prenom, posts.id, posts.userId, posts.title, posts.content, posts.date AS date FROM users INNER JOIN posts ON users.id = posts.userId ORDER BY date DESC', (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};

// modifier une publication
exports.updatePost = async (req, res) => {
    db.query(`UPDATE posts SET message = '${req.body.message}' WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};

// supprimer une publication
exports.deletePost = async (req, res) => {
    db.query(`DELETE FROM posts WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};

// ajouter un commentaire
exports.addComment = async (req, res) => {
    db.query(`INSERT INTO comments VALUES (NULL, ${req.body.userId}, ${req.params.id}, NOW(), '${req.body.message}')`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};

// suppression d'un commentaire
exports.deleteComment = async (req, res) => {
    db.query(`DELETE FROM comments WHERE comments.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};

// ajout d'un like 
exports.likePost = async (req, res, next) => {
    db.query(`INSERT INTO like VALUES (NULL, ${req.body.userId}, ${req.params.id}, NOW())`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};