<template>
  <div class="feed">
    <h1 class="mb-3">Fil d'actualité</h1>
    <OnePost
      v-for="post of posts"
      v-bind:key="post.id"
      :id="post.id"
      :pseudo="post.pseudo"
      :message="post.message"
      :showBtn="true"
    />
  </div>
</template>

<script>
import PostService from "../services/PostService.js";
import OnePost from "@/components/OnePost.vue";

export default {
  name: "Posts",
  components: {
    OnePost,
  },
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      posts: [],
      error: "",
    };
  },
  methods: {
    async showFeed() {
      try {
        const response = await PostService.getPosts();
        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.response.data.error;
      }
    },
    getOnePost(id) {
      this.$router.push(`posts/${id}`);
    },
  },
};
</script>

  