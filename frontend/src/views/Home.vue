<template>
  <div class="home">
    <div class="header"><Header /></div>
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
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Login,
    Header,
  },
};
</script>
<style scoped>
.home-logo {
  width: 400px;
  margin: 0 auto;
}
</style>
