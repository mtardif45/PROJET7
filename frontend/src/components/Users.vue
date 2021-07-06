<template>
  <div class="users">
    <h1 class="mb-3">{{ user.pseudo }}</h1>
    <OneUser
      :id="user.id"
      :bio="user.bio"
      :avatar="user.avatar"
      :showBtn="false"
    />
  </div>
</template>

<script>
import OneUser from "@/components/OneUser.vue";

export default {
  name: "Users",
  components: {
    OneUser,
  },
  data: function () {
    return {
      users: [
        { id: 0, pseudo: "usr0", bio: "Bio user 0", avatar: "" },
        { id: 1, pseudo: "usr1", bio: "Bio user 1", avatar: "" },
        { id: 3, pseudo: "usr3", bio: "Bio user 3", avatar: "" },
        { id: 4, pseudo: "usr4", bio: "Bio user 4", avatar: "" },
        { id: 5, pseudo: "usr5", bio: "Bio user 5", avatar: "" },
        { id: 6, pseudo: "usr6", bio: "Bio user 6", avatar: "" },
      ],
    };
  },
  computed: {
    userId() {
      return parseInt(this.$route.params.id);
    },
    user() {
      return this.users.filter((user) => user.id == this.userId)[0];
    },
  },
};
</script>
