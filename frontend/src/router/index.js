import Vue from 'vue'
import VueRouter from 'vue-router'
// import auth from '../middleware/auth'
// import VueRouteMiddleware from 'vue-route-middleware'
// import store from '../store/index.js'
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
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/posts/:id',
    name: 'OnePost',
    component: OnePost,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/accounts/:id',
    name: 'OneUser',
    component: OneUser,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/accounts',
    name: 'Users',
    component: Users,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/add',
    name: 'CreatePost',
    component: CreatePost,
    // meta: {
    //   requiresAuth: true
    // }

  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    // meta: {
    //   requiresAuth: true
    // }

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// test avec middleware auth
// router.beforeEach(VueRouteMiddleware());

// test avec global navigation meta guard
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLogged) {
//       next()
//       return
//     }

//     next({ name: 'login' })
//   }
//   else {
//     next()
//   }
// })

export default router;
