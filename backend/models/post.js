const sql = require('../database_connect'); // import modèle de la bdd

// constructeur
const Post = function (post) {
    this.id = post.id;
    this.message = post.message;
    this.imageUrl = post.imageUrl;
    this.userId = post.userId;
    this.pseudo = post.pseudo;
    this.createdAt = post.createdAt;
};

Post.create = (newPost, result) => {
    sql.query(`INSERT INTO posts SET ?`, newPost, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created Post: ", { id: res.id, ...newPost });
        result(null, { id: res.id, ...newPost });
    });
};

Post.getOne = (id, result) => {
    sql.query(`SELECT * FROM posts WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found post: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Post.getAll = result => {
    sql.query(`SELECT * FROM posts`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("posts: ", res);
        result(null, res);
    });
};

Post.remove = (id, result) => {
    sql.query(`DELETE FROM posts WHERE id = ?`, id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted post with id: ", id);
        result(null, res);
    });
};

Post.update = (id, post, result) => {
    sql.query(`UPDATE posts SET userId = ?, pseudo = ?, message= ?, imageUrl= ?, updatedAt=? WHERE id= ?`,
        [post.userId, post.pseudo, post.message, post.imageUrl, new Date, post.id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("updated post: ", { id: id, ...post });
            // result(null, { id: id, ...post });
        }
    );
};

module.exports = Post;
