<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome into Groupomania Social Network" />
    <div id="login">
      <Login />
    </div>
    <div id="signup">
      <p>Vous n'avez pas encore de compte?</p>
      <button type="button" class="btn btn-outline-primary">
        <router-link to="/SignUp">S'enregistrer</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Login,
  },
};
</script>
