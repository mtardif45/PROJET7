<template>
  <div id="post" class="card gedf-card">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-2">
            <img
              class="rounded-circle"
              width="45"
              :src="imageUrl"
              alt="image postée par l'utilisateur"
            />
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Présentation:</h5>
        <p class="card-text">
          {{ message }}
        </p>
      </div>

      <div class="card-footer">
        <!-- <div class="col" v-if="showBtn">
          <input
            type="button"
            class="btn btn-primary fadeIn fourth"
            value="Afficher"
            v-on:click="getOnePost(id)"
          />
        </div> -->
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
    id: Number,
    //pseudo: String,
    message: String,
    imageUrl: String,
    showBtn: Boolean,
  },
  data() {
    return {
      post: {},
      userId: this.$store.state.user.id,
    };
  },
  methods: {
    getOnePost(id) {
      this.$router.push(`posts/${id}`);
    },
  },
  computed: {
    onePost() {
      return this.$store.getters.post;
    },
  },
  beforeMount() {
    let id = this.$route.params.id;
    this.$store.dispatch("getPostById", id);
  },
};
</script>
