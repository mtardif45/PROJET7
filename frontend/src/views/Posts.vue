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
      messageRetour: null,
      errorMessage: null,
    };
  },
  methods: {},
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

  