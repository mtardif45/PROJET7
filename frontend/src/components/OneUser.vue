<template>
  <div>
    <div class="container mx-auto mt-4">
      <h1>Détail du profil</h1>
      <div class="row d-flex justify-content-center">
        <div class="card text-center mt-4" style="width: 40rem">
          <p class="font-weight-bold text-uppercase">{{ user.pseudo }}</p>

          <div>
            <img
              class="img-fluid mr-3 mt-3"
              width="150px"
              :src="user.avatar"
              alt="photo de profil"
            />
          </div>

          <div class="mt-3">
            <p>Email:</p>
            <p>{{ user.email }}</p>
          </div>

          <div class="bio">
            <p>Présentation:</p>
            <p>{{ user.bio }}</p>
          </div>
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
      editAvatar: false,
      editBio: false,
      editEmail: false,
      // isAdmin: false
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
};
</script>

<style scoped>
.card {
  background: rgb(250, 228, 228);
  border: 1px solid #1f1c1d;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 2rem;
}
</style>