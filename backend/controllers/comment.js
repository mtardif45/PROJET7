const Comment = require('../models/comment');

exports.addComment = async (req, res) => {
    // constructor
    const comment = new Comment({
        message: req.body.message,
        pseudo: req.body.pseudo,
        userId: req.body.userId,
        postId: req.body.postId,
        createdAt: new Date(),
    });

    Comment.create(comment, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occured while creating the comment."
            });
        else res.send(data);
    });
};

exports.deleteComment = (req, res) => {
    Comment.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Comment with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.id
                });
            }
        } else res.send({ message: `Comment was deleted successfully!` });
    });
};
