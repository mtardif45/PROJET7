<template>
  <div class="feed">
    <h1 class="mb-3">Fil d'actualité</h1>
    <Posts
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
import Posts from "@/components/Posts.vue";

export default {
  name: "Feed",
  components: {
    Posts,
  },
  data: function () {
    return {
      posts: [],
    };
  },
};
</script>
  