import Api from "../Api";

// configuration des requêtes axios pour les publications 
export default {
    getPosts() {
        return Api.get("posts");
    },
    getPostById(id) {
        return Api.get("posts/" + id);
    },
    createPost(data) {
        return Api.post("posts/add", data);
    },
    updatePost(id, data) {
        return Api.put("posts/" + id, data);
    },
    deletePostById(id) {
        return Api.delete("posts/" + id);
    },
    commentPost(id, data) {
        return Api.post("posts/" + id + "/comments", data);
    },
    getComments(id) {
        return Api.get("posts/" + id + "/comments");
    },
    getCommentById(id) {
        return Api.get("posts/" + id + "/comments/" + id);
    },
    deleteComment(id) {
        return Api.delete("posts/comments/" + id);
    },
    likePost(id) {
        return Api.post("posts/" + id + "/like");
    },
    deleteLike(id) {
        return Api.delete("posts/" + id + "/likes");
    }
}