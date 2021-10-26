<template>
  <div class="container">
    <h1 class="m-3">Fil d'actualité</h1>
    <div
      class="col-8 mx-auto"
      v-for="post in posts.slice().reverse()"
      :key="post.id"
    >
      <div class="single-post-item col md-4 mt-3">
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

        <div class="card-footer">
          <router-link :to="`/posts/${post.id}`">
            <button class="btn btn-sm bg-info has-icon btn-block mx-auto">
              <i class="fas fa-eye"></i></button
          ></router-link>

          <button
            v-if="
              $store.state.user.admin === 1 ||
              $store.state.user.id === post.userId
            "
            value="Supprimer"
            class="btn btn-sm bg-danger has-icon btn-block mt-2 mx-auto"
            aria-label="supprimer le post"
            @click="deletePost(post.id)"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
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
        admin: 0,
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
      this.$store.dispatch("deletePost", id);
      alert("post deleted successfully!");
      this.$router.go();
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

.btn {
  width: 100px;
}
</style>