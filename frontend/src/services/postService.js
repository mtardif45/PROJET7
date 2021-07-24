import Api from "../Api";

// configuration des requêtes axios pour les publications 
export default {
    getPosts() {
        return Api().get("/auth/posts");
    },
    getPostById(id) {
        return Api().get(`/auth/posts/${id}`);
    },
    createPost(data) {
        return Api().post("/auth/posts/add", data);
    },
    updatePost(id, data) {
        return Api().put(`/auth/posts/${id}`, data)
    },
    deletePostById(id) {
        return Api().delete(`/auth/posts/${id}`)
    },
    likePost(id) {
        return Api().post("auth/posts/" + id) + "/like";
    },

    commentPost(id, data) {
        return Api().post("auth/posts/" + id + "/comments", data);
    },

    deleteComment(id) {
        return Api().delete("auth/posts/comments/" + id);
    },
}