<template>
  <div class="home">
    <img class="img-fluid" alt="Vue logo" src="../assets/logo.png" />
    <div id="login">
      <Login />
    </div>
    <div id="signup">
      <p>Vous n'avez pas encore de compte?</p>
      <button type="button" class="btn btn-outline-primarys">
        <router-link to="/SignUp">S'enregistrer</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>
