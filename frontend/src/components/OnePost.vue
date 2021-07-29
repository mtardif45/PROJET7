<template>
  <div class="card gedf-card">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-2">
            <img
              class="rounded-circle"
              width="45"
              src="../assets/87-512.png"
              alt=""
            />
          </div>
          <div class="ml-2">
            <div class="h5 m-0">{{}}</div>
            <div class="h7 text-muted"></div>
          </div>
        </div>
        <div>
          <div class="dropdown">
            <button
              class="btn btn-link dropdown-toggle"
              type="button"
              id="gedf-drop1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="gedf-drop1"
            ></div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <a class="card-link" href="#">
          <h5 class="card-title">
            {{ imageUrl }}
          </h5>
        </a>

        <p class="card-text">
          {{ message }}
        </p>
      </div>

      <div class="card-footer">
        <input
          type="button"
          class="btn btn-primary fadeIn fourth"
          value="Afficher"
          v-if="showBtn"
          v-on:click="getOnePost(post.id)"
        />
        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnePost",
  props: {
    posts: [],
  },
  methods: {
    getOnePost(id) {
      this.$router.push(`posts/${id}`);
    },
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
  },
  beforeMount() {
    let id = this.$route.params.id;
    this.$store.dispatch("getPostById", id);
  },
};
</script>
