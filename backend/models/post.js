const sql = require('../database_connect'); // import modèle de la bdd

const Post = function () {
    this.id = post.id;
    this.message = post.message;
    this.imageUrl = post.imageUrl;
    this.userId = post.userId;
}

Post.create = (newPost, result) => {
    const request = `INSERT INTO Posts(message, imageUrl, userId) VALUES (?, ?, ?)`;
    sql.query(request, newPost, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created Post: ", { id: res.insertId, ...newPost });
        result(null, { id: res.insertId, ...newPost });
    });
};

