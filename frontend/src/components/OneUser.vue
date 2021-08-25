<template>
  <div>
    <div class="wrapper">
      <div class="user">
        <h1>{{ user.avatar }} {{ user.pseudo }}</h1>
        <h2>User id:{{ user.id }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Présentation: {{ user.bio }}</p>
        <!-- <h2 v-if="this.$store.user.isAdmin === 1">Admin</h2> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneUser",
  data() {
    return {
      pseudo: "",
      email: "",
      id: "",
      bio: "",
      avatar: "",
    };
  },
  computed: {
    userId() {
      return parseInt(this.$route.params.id);
    },
    user() {
      return this.$store.getters.users[this.userId];
    },
  },
};
</script>