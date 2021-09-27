const Like = require('../models/like');

// like a post 
exports.likePost = (req, res) => {
    // constructor
    const like = new Like({
        id: req.body.id,
        userId: req.body.userId,
        postId: req.body.postId
    });

    Like.create(like, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occured while adding like"
            });
        else res.send(data);
    });
};

// delete like
exports.deleteLike = (req, res) => {
    Like.remove(req.body.postId, req.body.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found with user or post id.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete like with id "
                });
            }
        } else res.send({ message: `Like was deleted successfully!` });
    });
};