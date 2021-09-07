//const fs = require('fs'); // package permettant la modification du système de fichiers
//const { JsonWebTokenError } = require('jsonwebtoken');
const Post = require('../models/post');

// ajouter une publication
exports.createPost = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // create a post
    const post = new Post({
        message: req.body.message,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
        userId: req.body.userId,
        pseudo: req.body.pseudo
    });
    // save post in DB
    Post.create(post, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while creating the post."
            });
            return;
        }
        res.send(data);
    });
};

// récupérer une publication
exports.getOnePost = (req, res) => {
    Post.getOne(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `post not found with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving post" + req.params.id
                });
            }
        } else res.send(data);
    });
};

// voir toutes les publications 
exports.getAllPosts = (req, res) => {
    Post.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured."
            });
        }
        else res.send(data);
    });
};

// supprimer une publication
exports.deletePost = (req, res) => {
    Post.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found post with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.id
                });
            }
        } else res.send({ message: `Post was deleted successfully!` });
    });
};

// modifier une publication 
exports.updatePost = (req, res) => {
    Post.update(req.params.id, new Post({
        ...req.body,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : req.body.imageUrl
    }), (err, result) => {
        if (err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `post not found with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "error updating post" + req.params.id
                });
            }
        } else res.send({ message: "post updated successfully!" });
    }
    );
};