<template>
  <div class="container">
    <h1 class="m-3">Fil d'actualité</h1>
    <div
      class="single-post-item col md-4 mt-3"
      v-for="post in posts"
      :key="post.id"
    >
      <p>{{ post.pseudo }}</p>
      <img
        class=".img-fluid img-thumbnail"
        style="max-width: 300px"
        :src="post.imageUrl"
        alt="image postée par l'utilisateur"
      />
      <div class="post-content">
        <p>{{ post.message }}</p>
      </div>

      <div class="btn-group" role="group">
        <router-link :to="`/posts/${post.id}`">
          <input type="button" value="Afficher" class="btn-info mr-4"
        /></router-link>

        <div class="delete-btn">
          <input
            type="button"
            value="Supprimer"
            class="btn-danger"
            aria-label="supprimer le post"
            @click="deletePost(post.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      user: {
        admin: "",
      },
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  beforeMount() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    deletePost(id) {
      this.$store.commit("DELETE_POST", id);
      alert("post deleted successfully!");
    },
  },
};
</script>

<style scoped>
.single-post-item {
  border: 1px solid #4b0533;
  box-shadow: 2px 5px 10px #4b0533;
  margin: 15px auto;
  padding: 5px;
  position: relative;
}

img {
  width: 100%;
  height: auto;
}
.post-content {
  padding: 15px;
}

.post-content p {
  color: black;
  font-size: 14px;
  line-height: 1.33;
}
</style>