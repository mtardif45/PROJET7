import http from "../http-common";

export default {
    signUp(data) {
        return http.post("users/signup", data);
    },
    login(data) {
        return http.post("users/login", data);
    },
    updateAccount(id, data) {
        return http.put(`/users/accounts/${id}`, data);
    },
    deleteAccount(id) {
        return http.delete(`/users/accounts/${id}`);
    },
    getUsers() {
        return http.get("users/accounts");
    },
    getUserById(id) {
        return http.get(`/users/accounts/${id}`);
    },
};
