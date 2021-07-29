<template>
  <div class="users">
    <h1 class="mb-3">Tous les Utilisateurs</h1>
    <div class="row">
      <div class="col-6">
        <OneUser
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :avatar="user.avatar"
          :pseudo="user.pseudo"
          :email="user.email"
          :bio="user.bio"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import OneUser from "@/components/OneUser.vue";

export default {
  name: "Users",
  components: {
    OneUser,
  },
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
