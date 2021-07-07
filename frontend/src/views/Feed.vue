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
import OnePost from "@/components/OnePost.vue";

export default {
  name: "Feed",
  components: {
    OnePost,
  },
  data: function () {
    return {
      posts: [
        {
          id: 0,
          pseudo: "post0",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 1,
          pseudo: "post1",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 2,
          pseudo: "post2",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 3,
          pseudo: "post3",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
      ],
    };
  },
};
</script>
  