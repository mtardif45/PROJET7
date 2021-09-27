<template>
  <div class="Home">
    <div id="login">
      <Login />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Login },
};
</script>
<style scoped>
.home-logo {
  width: 400px;
  margin: 0 auto;
}
</style>
