// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import PostService from '../services/PostService'
import UserService from '../services/UserService'

//Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    //to handle state with default values
    state: {
        token: "",
        user: {},
        isLoggedIn: false,
        isLoading: false,
        users: [],
        posts: [],
        post: {},
        comments: [],
        comment: {},
        likes: [],
        like: {},
        message: "",
        error: "",
    },
    // maintien de la session utilisateur d'une fenêtre à l'autre
    plugins: [createPersistedState({
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
        comments(state) {
            return state.comments;
        },
        comment(state) {
            return state.comment;
        },
        like(state) {
            return state.like;
        },
        likes(state) {
            return state.likes;
        },
        errorMessage(state) {
            return state.error;
        },
        messageRetour(state) {
            return state.message;
        },
        isLogged(state) {
            return state.token && state.isLoggedIn;
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
        // comments
        COMMENT_POST(state, comment) {
            state.posts = [comment, ...state.posts];
            state.message = "post commenté";
        },
        GET_COMMENTS(state, comments) {
            state.comments = comments;
            state.isLoading = false;
        },
        GET_COMMENT_BY_ID(state, comment) {
            state.comment = comment;
            state.isLoading = false;
        },
        DELETE_COMMENT(state, id) {
            state.posts = [...state.posts.filter((element) => element.id !== id)];
            state.message = "commentaire supprimé";
        },
        // end comments

        // like
        LIKE_POST(state, like) {
            state.posts = [like, ...state.posts];
            state.message = "tu as liké le post"
        },
        DELETE_LIKE(state, id) {
            state.posts = [...state.posts.filter((element) => element.id !== id)];
            state.message = "like supprimé";
        },
        // end like
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
            let user = null
            commit("LOG_OUT", user);
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
        getUserById({ commit }, id) {
            UserService.getUserById(id).then((response) => {
                const user = response.data;
                console.log(user)
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
            UserService.updateAccount(data.id, data.fd)
                .then((response) => {
                    const user = response.data;
                    commit("UPDATE_ACCOUNT", id, user);
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
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts)
                    });
                });
        },
        updatePost({ commit }, data) {
            let id = this.state.post.id;
            // console.log("updatePost" + data.id, data.fd)
            PostService.updatePost(data.id, data.fd)
                .then((response) => {
                    const post = response.data;
                    commit("UPDATE_POST", id, post)
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    });
                });
        },
        deletePost({ commit }, id) {
            PostService.deletePostById(id)
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
        // end post actions
        // comment action 
        commentPost({ commit }, payload) {
            axios
                .post(
                    `http://localhost:3000/api/posts/${payload.id}/comments`,
                    payload.data,
                    { headers: { Authorization: this.state.token } }
                )
                .then((response) => {
                    const comment = response.data;
                    commit("COMMENT_POST", comment);
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    });
                });
        },
        getComments({ commit }, id) {
            PostService.getComments(id).then((response) => {
                const comments = response.data;
                commit("GET_COMMENTS", comments)
            })
        },

        deleteComment({ commit }, id) {
            PostService.deleteComment(id)
                .then(() => {
                    commit("DELETE_COMMENT", id);
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    });
                });
        },
        //like actions
        likePost({ commit }, payload) {
            axios
                .post(
                    `http://localhost:3000/api/posts/${payload.id}/like`,
                    payload.data,
                    { headers: { Authorization: this.state.token } }
                )
                .then((response) => {
                    const like = response.data;
                    commit("LIKE_POST", like);
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    });
                });
        },
        deleteLike({ commit }, id) {
            PostService.deleteLike(id)
                .then(() => {
                    commit("DELETE_LIKE", id)
                })
                .then(() => {
                    PostService.getPosts().then((response) => {
                        const posts = response.data;
                        commit("GET_POSTS", posts);
                    });
                });
        },
        // end like action
    },
});