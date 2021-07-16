<template>
  <div class="card gedf-card">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-2">
            <img
              class="rounded-circle"
              width="45"
              src="https://picsum.photos/50/50"
              alt=""
            />
          </div>
          <div class="ml-2">
            <div class="h5 m-0">{{ pseudo }}</div>
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
            {{ image }}
          </h5>
        </a>

        <p class="card-text">
          {{ message }}
        </p>
      </div>

      <div class="col" v-if="showBtn" @click="showPost">
        <router-link
          class="btn btn-info"
          :to="{ name: 'Posts', params: { id: id } }"
          >Voir la publication</router-link
        >
      </div>

      <div class="card-footer">
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
    pseudo: String,
    message: String,
    image: String,
    showBtn: Boolean,
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
  methods: {
    showPost() {
      let id = this.$route.params.id;
      const formData = new FormData();
      if (this.message !== null) {
        formData.append("message", this.message);
      }
      this.$store.dispatch("getPostById", id);
    },
  },
  mounted() {
    this.showPost(this.$route.params.id);
  },
};
</script>
