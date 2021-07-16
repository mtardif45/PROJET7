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
// @ is an alias to /src
import PostService from "../services/PostService";
import OnePost from "@/components/OnePost.vue";

export default {
  name: "Feed",
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
    getAllPosts() {
      try {
        const response = PostService.getPosts();
        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.response.data.error;
      }
    },
  },
};
</script>

  