import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import AllUsers from '../views/AllUsers.vue'

import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Header from '../components/Header.vue'
import OnePost from '../components/OnePost.vue'
import Posts from '../components/Posts.vue'
import OneUser from '../components/OneUser.vue'
import Users from '../components/Users.vue'
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
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/allusers',
    name: 'AllUsers',
    component: AllUsers
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/OnePost',
    name: 'OnePost',
    component: OnePost
  },
  {
    path: '/Feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/OneUser',
    name: 'OneUser',
    component: OneUser
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/CreatePost',
    name: 'CreatePost',
    component: CreatePost
  },
]

const router = new VueRouter({
  routes
})

export default router
