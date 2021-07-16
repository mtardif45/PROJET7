import Api from "../Api";

// configuration des requêtes axios pour les utilisateurs
export default {
    signUp(data) {
        return Api.post("/signup", data);
    },
    login(data) {
        return Api.post("/login", data);
    },
    updateAccount(id, data) {
        return Api.put(`/accounts/${id}`, data);
    },
    deleteAccount(id) {
        return Api.delete(`/accounts/${id}`);
    },
    getUsers() {
        return Api.get("/accounts");
    },
    getUserById(id) {
        return Api.get(`/accounts/${id}`);
    },
};
