<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/icon-left-font-monochrome-white.svg"
            height="30"
            alt="logo groupomania"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="isLoggedIn === true">
              <a class="nav-link" href="#"
                ><router-link to="/posts">Fil d'actualité</router-link></a
              >
            </li>
            <li class="nav-item" v-if="isLoggedIn === true">
              <a class="nav-link" href="#"
                ><router-link to="/add"> Ajouter un post</router-link></a
              >
            </li>
            <li class="nav-item" v-if="isLoggedIn === true">
              <a class="nav-link" href="#"
                ><router-link to="/accounts"> Tous les profils</router-link></a
              >
            </li>
            <li class="nav-item" v-if="isLoggedIn === true">
              <a class="nav-link" href="#"
                ><router-link :to="`/profile/${user.id}`">
                  Mon compte</router-link
                ></a
              >
            </li>
            <li class="nav-item" v-if="isLoggedIn === true">
              <a class="nav-link" href="#" @click="logOut()">
                <router-link to="/">Deconnexion</router-link></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    // user: {
    // type: Object,
    // },
  },
  data() {
    return {
      user: {
        id: this.$store.state.user.id,
      },
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$store.dispatch("deleteToken");
    },
  },
};
</script>


<style scoped>
a {
  color: white;
  font-size: 18px;
  font-weight: strong;
}
</style>