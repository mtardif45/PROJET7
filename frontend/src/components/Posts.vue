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

export default {
  name: "Posts",
  components: {
    OnePost,
  },
  data: function () {
    return {
      posts: [
        {
          id: 0,
          pseudo: "usr0",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 1,
          pseudo: "usr1",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 3,
          pseudo: "usr3",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 4,
          pseudo: "usr4",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 5,
          pseudo: "usr5",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
        {
          id: 6,
          pseudo: "usr6",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae",
          photo: "",
        },
      ],
    };
  },
  computed: {
    postId() {
      return parseInt(this.$route.params.id);
    },
    post() {
      return this.posts.filter((post) => post.id == this.postId)[0];
    },
  },
};
</script>