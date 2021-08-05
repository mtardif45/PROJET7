<template>
  <div id="posts">
    <div class="row align-items-center text-center justify-content-center">
      <PostsList />
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";

export default {
  name: "Posts",
  components: {
    PostsList,
  },
};
</script>

