<template>
  <div class="feed">
    <h1 class="mb-3">Fil d'actualité</h1>
    <div class="col mb-3" v-for="post of posts" :key="post.id">
      <p>{{ post.id }}</p>
      <p>{{ post.imageUrl }}</p>
      <p>{{ post.message }}</p>

      <router-link :to="`/posts/${post.id}`">
        <input type="button" value="afficher" class="btn-primary"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  components: {},
  props: {},
  data() {
    return {
      post: {
        id: "",
        message: "",
        imageUrl: "",
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
};
</script>

  