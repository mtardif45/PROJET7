<template>
  <div>
    <h1 class="mb-3">Détail de la publication</h1>
    <OnePost
      :id="post.id"
      :pseudo="post.pseudo"
      :message="post.message"
      :image="post.image"
      :showBtn="false"
    />
  </div>
</template>

<script>
import OnePost from "@/components/OnePost.vue";
import axios from "axios";

export default {
  name: "Posts",
  components: {
    OnePost,
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  // Fetches posts when the component is created.
  created() {
    axios
      .get(`http://localhost:3000/api/posts`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
 