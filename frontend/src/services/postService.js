import http from "../http-common";

// configuration des requêtes axios pour les publications 
export default {
    getPosts() {
        return http.get("/posts");
    },
    getPostById(id) {
        return http.get(`/posts/${id}`);
    },
    createPost(data) {
        return http.post("/posts/add", data);
    },
    updatePost(id, data) {
        return http.put(`/posts/${id}`, data)
    },
    deletePostById(id) {
        return http.delete(`/posts/${id}`)
    },
    likePost(id) {
        return http.post("posts/" + id) + "/like";
    },

    commentPost(id, data) {
        return http.post("posts/" + id + "/comments", data);
    },

    deleteComment(id) {
        return http.delete("posts/comments/" + id);
    },
}