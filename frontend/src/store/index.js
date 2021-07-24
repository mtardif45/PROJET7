// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import PostService from '../services/PostService'
import UserService from '../services/UserService'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    //to handle state
    state: {
        token: null,
        user: {},
        isLoggedIn: false,
        isLoading: false,
        posts: [],
        users: [],
        post: {},
        message: "",
        error: "",
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    //to handle state
    getters: {
        users(state) {
            return state.users;
        },
        user(state) {
            return state.user;
        },
        posts(state) {
            return state.posts;
        },
        post(state) {
            return state.post;
        },
        errorMessage(state) {
            return state.error;
        },
        messageRetour(state) {
            return state.message;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
    },

    //handle actions
    actions: {
        //users actions
        setToken({ commit }, token) {
            commit("SET_TOKEN", token);
        },
        deleteToken({ commit }, token) {
            commit("DELETE_TOKEN", token);
        },
        logOut({ commit }) {
            commit("LOG_OUT");
        },
        setUser({ commit }, user) {
            commit("SET_USER", user);
        },
        getUsers({ commit }) {
            UserService.getUsers().then((response) => {
                const users = response.data;
                commit("GET_USERS", users);
            });
        },
        getUserById({ commit }) {
            let id = this.state.user.id;
            UserService.getUserById(id).then((response) => {
                const user = response.data;
                commit("GET_USER_BY_ID", user);
            });
        },
        deleteAccount({ commit }, id) {
            UserService.deleteAccount(id).then(() => {
                commit("DELETE_ACCOUNT", id);
            })
        },
        updateAccount({ commit }, data) {
            let id = this.state.user.id;
            axios.put(`http://localhost:3000/api/accounts/${id}`, data, {
                headers: { Authorization: this.state.token },
            })
                .then((response) => {
                    const newUser = response.data;
                    commit("UPDATE_ACCOUNT", id, newUser);
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    })
                })
        },

        //posts actions
        getPosts({ commit }) {
            PostService.getPosts().then((response) => {
                const posts = response.data;
                commit("GET_POSTS", posts);
            })
        },
        getPostById({ commit }, id) {
            PostService.getPostById(id).then((response) => {
                const post = response.data;
                commit("GET_POST_BY_ID", post)
            })
        },
        createPost({ commit }, post) {
            PostService.createPost(post)
                .then((response) => {
                    const post = response.data;
                    commit("ADD_POST", post);
                })
        },
        updatePost({ commit }, data) {
            let id = this.state.post.id;
            axios.put(`http:localhost:3000/api/posts/${id}`, data, {
                headers: { Authorization: this.state.token },
            })
                .then((response) => {
                    const post = response.data;
                    commit("UPDATE_POST", id, post);
                });
        },
        deletePost({ commit }, id) {
            PostService.deletePost(id)
                .then(() => {
                    commit("DELETE_POST", id);
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    });
                });
        },

    },

    //to handle mutations
    mutations: {
        // users mutations
        SET_TOKEN(state, token) {
            state.token = token;
            if (token) {
                state.isLoggedIn = true;
            } else {
                state.isLoggedIn = false;
            }
        },
        DELETE_TOKEN(state) {
            state.token = null;
            state.user = "";
            state.isLoggedIn = false;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        GET_USER_BY_ID(state, user) {
            state.user = user;
        },
        GET_USERS(state, users) {
            state.users = users;
        },
        UPDATE_ACCOUNT(state, id, user) {
            Object.assign(
                state.users.find((element) => element.id === id),
                user
            );
            state.message = "account updated";
        },

        DELETE_ACCOUNT(state, id) {
            state.users = [...state.users.filter((element) => element.id !== id)];
            state.message = "account deleted";
        },
        LOG_OUT(state) {
            sessionStorage.clear();
            state.token = null;
            state.user = null;
            state.isLoggedIn = false;
            state.message = "";
            state.error = "";
        },

        // posts mutations
        GET_POSTS(state, posts) {
            state.posts = posts;
            state.isLoading = false;
        },
        GET_POST_BY_ID(state, post) {
            state.post = post;
            state.isLoading = false;
        },
        ADD_POST(state, post) {
            state.posts = [post, ...state.posts];
            state.message = "post created";
        },
        UPDATE_POST(state, id, post) {
            Object.assign(
                state.posts.find((element) => element.id === id),
                post
            );
            state.message = "your post has been updated";
        },
        DELETE_POST(state, id) {
            state.posts = [...state.posts.filter((element) => element.id !== id)];
            state.message = "post deleted";
        },
    }
});