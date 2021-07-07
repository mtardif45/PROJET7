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
import axios from "axios";
// @ is an alias to /src
import OnePost from "@/components/OnePost.vue";

export default {
  name: "Feed",
  components: {
    OnePost,
  },
  data: function () {
    return {
      posts: [],
      error: "",
    };
  },
  mounted() {
    axios.get("http:localhost/3000/api/posts").then((response) => {
      this.posts = response.data;
      console.log(this.posts);
    });
  },
};
</script>

  