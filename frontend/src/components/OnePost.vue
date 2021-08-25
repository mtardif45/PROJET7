<template>
  <div id="post" class="wrapper">
    <h1>Détail de la publication</h1>
    <div class="mb-3">
      <h4>PostId: {{ post.id }}</h4>
      <h4>userId: {{ post.pseudo }}</h4>
      <h4>Image:</h4>
      <img
        class=""
        width="100"
        :src="post.imageUrl"
        alt="image postée par l'utilisateur"
      />
      <h4 class="card-title">Description:</h4>
      <p class="card-text">
        {{ post.message }}
      </p>
    </div>

    <div class="footer">
      <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
      <a href="#" class="card-link"><i class="fa fa-comment"></i> Commenter</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OnePost",
  data() {
    return {
      post: {
        // userId: "",
        // pseudo: "",
        // imageUrl: "",
        // message: "",
      },
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/posts/` + this.$route.params.id
      );
      this.post = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  // computed: {
  //   onePost() {
  //     return this.$store.getters.post;
  //   },
  // },
  // beforeMount() {
  //   let id = this.$route.params.id;
  //   this.$store.dispatch("getPostById", id);
  // },
};
</script>
