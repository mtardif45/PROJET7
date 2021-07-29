<template>
  <div class="feed">
    <h1 class="mb-3">Fil d'actualité</h1>
    <OnePost
      v-for="post of posts"
      :key="post.id"
      :id="post.id"
      :post="post"
      :pseudo="post.pseudo"
      :message="post.message"
      :imageUrl="post.imageUrl"
    />
    <div>
      <div class="danger-alert" v-html="errorMessage" />
      <div class="danger-alert" v-html="messageRetour" />
    </div>
  </div>
</template>

<script>
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
      errorMessage: null,
      messageRetour: null,
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>

  