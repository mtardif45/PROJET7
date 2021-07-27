import Api from "../Api";

// configuration des requêtes axios pour les utilisateurs
export default {
    signup(data) {
        return Api.post("users/signup", data);
    },
    login(data) {
        return Api.post("users/login", data);
    },
    updateAccount(id, data) {
        return Api.put("users/accounts/" + id, data);
    },
    deleteAccount(id) {
        return Api.delete("users/accounts/" + id);
    },
    getUsers() {
        return Api.get("users/accounts");
    },
    getUserById(id) {
        return Api.get("users/accounts/" + id);
    },
};
