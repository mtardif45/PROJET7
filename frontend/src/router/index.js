import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Header from '../components/Header.vue'
import OnePost from '../views/OnePost.vue'
import OneUser from '../components/OneUser.vue'
import Users from '../views/Users.vue'
import CreatePost from '../components/CreatePost.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    component: Header,

  },
  {
    path: '/posts/:id',
    name: 'OnePost',
    component: OnePost,

  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,

  },
  {
    path: '/accounts/:id',
    name: 'OneUser',
    component: OneUser,

  },
  {
    path: '/accounts',
    name: 'Users',
    component: Users,

  },
  {
    path: '/add',
    name: 'CreatePost',
    component: CreatePost,

  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,


  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
