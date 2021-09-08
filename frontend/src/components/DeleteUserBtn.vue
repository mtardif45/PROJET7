<template>
  <div id="deleteUserBtn">
    <input
      type="button"
      value="Supprimer"
      class="btn btn-danger"
      aria-label="supprimer le post"
      @click="deleteUser(user.id)"
    />
  </div>
</template>

<script>
export default {
  name: "DeleteUserBtn",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    deleteUser() {
      let id = this.$route.params.id;
      this.$store.dispatch("deleteAccount", id);
      this.$store.dispatch("deleteToken");
      alert("user deleted successfully");
      this.$router.push("/login");
    },
  },
};
</script>
