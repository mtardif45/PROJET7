<template>
  <div>
    <h1 class="mb-3">{{ user.pseudo }}</h1>
    <OneUser
      :id="user.id"
      :pseudo="user.pseudo"
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
        { id: 0, name: "User 0", pseudo: "usr0", bio: "Bio user 0", photo: "" },
        { id: 1, name: "User 1", pseudo: "usr1", bio: "Bio user 1", photo: "" },
        { id: 3, name: "User 3", pseudo: "usr3", bio: "Bio user 3", photo: "" },
        { id: 4, name: "User 4", pseudo: "usr4", bio: "Bio user 4", photo: "" },
        { id: 5, name: "User 5", pseudo: "usr5", bio: "Bio user 5", photo: "" },
        { id: 6, name: "User 6", pseudo: "usr6", bio: "Bio user 6", photo: "" },
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
