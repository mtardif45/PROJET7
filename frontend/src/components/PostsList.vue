<template>
  <div class="feed">
    <h1 class="mb-3">Fil d'actualité</h1>
    <div class="col text-center mt-3" v-for="post in posts" :key="post.id">
      <p>{{ post.id }}</p>
      <p>{{ post.imageUrl }}</p>
      <p>{{ post.message }}</p>

      <div class="btn-group" role="group">
        <router-link :to="`/posts/${post.id}`">
          <input type="button" value="Afficher" class="btn-primary mr-2"
        /></router-link>

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
</template>

<script>
export default {
  name: "PostsList",
  props: {
    post: {
      type: Object,
    },
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
      alert("post deleted successfully");
    },
  },
};
</script>

  