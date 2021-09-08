<template>
  <div class="Home">
    <div class="home-logo">
      <img class="img-fluid" alt="logo" src="../assets/logo.png" />
    </div>
    <div id="login">
      <Login />
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
<style scoped>
.home-logo {
  width: 400px;
  margin: 0 auto;
}
</style>
