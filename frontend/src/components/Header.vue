<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
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
        <i class="fas fa-bars"></i>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarResponsive"
        v-if="isLoggedIn === true"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/posts">Fil d'actualité</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/add"> Ajouter un post</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/accounts"> Tous les profils</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link :to="`/profile/${user.id}`">
                Mon compte</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logOut()">
              <router-link to="/">Deconnexion</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
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