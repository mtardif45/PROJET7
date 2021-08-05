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
import axios from "axios";

export default {
  name: "OneUser",
  data() {
    return {
      user: {
        pseudo: "",
        email: "",
        id: "",
        bio: "",
        avatar: "",
        //isAdmin: null,
      },
    };
  },
  async created() {
    let response = await axios.get(
      `http://localhost:3000/api/accounts/` + this.$route.params.id
    );
    this.user = response.data[0];
  },
  // methods: {
  //   showUser(id) {
  //     this.$router.push(`accounts/${id}`);
  //   },
  // },
  // computed: {
  //   user() {
  //     return this.$store.getters.user;
  //   },
  // },
  // beforeMount() {
  //   this.$store.dispatch("getUserById");
  // },
};
</script>