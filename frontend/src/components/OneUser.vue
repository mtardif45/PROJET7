<template>
  <div>
    <div class="wrapper">
      <div class="user">
        <h1>{{ user.avatar }} {{ user.pseudo }}</h1>
        <h2>User id:{{ user.id }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Présentation: {{ user.bio }}</p>

        <div class="footer">
          <input
            type="button"
            value="Modifier"
            class="btn-danger"
            aria-label="modifier le profil"
            @click="modifyUser(user.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OneUser",
  data() {
    return {
      user: {},
      isAdmin: false,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/accounts/` + this.$route.params.id
      );
      this.user = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    modifyUser() {},
  },
};
</script>