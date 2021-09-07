<template>
  <div id="editUserBtn">
    <input
      type="button"
      value="Modifier"
      class="btn btn-success mr-3 p-2"
      aria-label="Editer"
      @click="modifyUser()"
    />
  </div>
</template>

<script>
export default {
  name: "EditUserBtn",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    modifyUser() {
      let id = this.$route.params.id;
      this.$store.dispatch("updateAccount", id);
      alert("user updated successfully");
    },
  },
};
</script>
