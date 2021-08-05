<template>
  <div class="wrapper">
    <h1 class="mb-2">Tous les Utilisateurs</h1>
    <div class="col" v-for="user in users" :key="user.id">
      <p>{{ user.pseudo }}</p>
      <p>{{ user.avatar }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.bio }}</p>

      <router-link :to="`/accounts/${user.id}`">
        <input type="button" value="afficher" class="btn-primary"
      /></router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "UsersList",
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  beforeMount() {
    this.$store.dispatch("getUsers");
  },
};
</script>
