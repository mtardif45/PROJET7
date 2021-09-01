import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
// import PostsList from '../components/PostsList.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Header from '../components/Header.vue'
import OnePost from '../components/OnePost.vue'
import OneUser from '../components/OneUser.vue'
import Users from '../views/Users.vue'
import CreatePost from '../components/CreatePost.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/posts/:id',
    name: 'OnePost',
    component: OnePost
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  // {
  //   path: '/postslist',
  //   name: 'PostsList',
  //   component: PostsList
  // },
  {
    path: '/accounts/:id',
    name: 'OneUser',
    component: OneUser
  },
  {
    path: '/accounts',
    name: 'Users',
    component: Users
  },
  {
    path: '/add',
    name: 'CreatePost',
    component: CreatePost,
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
