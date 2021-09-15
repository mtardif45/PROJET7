<template>
  <div class="posts">
    <h1 class="mb-2">Tous les Utilisateurs</h1>

    <div class="col" v-for="user in users" :key="user.id">
      <p>{{ user.pseudo }}</p>
      <img :src="user.avatar" />
      <p>{{ user.email }}</p>
      <p>{{ user.bio }}</p>

      <router-link :to="`/accounts/${user.id}`">
        <input type="button" value="afficher" class="btn-primary"
      /></router-link>

      <div class="deleteByAdmin">
        <input
          type="button"
          value="Supprimer"
          class="btn btn-danger mr-2"
          aria-label="supprimer le compte"
          @click="deleteUser(user.id)"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UsersList",
  data() {
    return {
      user: {},
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  beforeMount() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("deleteAccount", id);
      this.$store.dispatch("deleteToken");
      alert("account deleted successfully");
      //  this.$router.push("/");
      console.log(id);
    },
  },
};
</script>
