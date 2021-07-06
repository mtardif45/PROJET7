<template>
  <div class="users">
    <h1 class="mb-3">Tous les Utilisateurs</h1>
    <div class="row">
      <div class="col-6" v-for="user in users" v-bind:key="user.id">
        <OneUser
          :id="user.id"
          :pseudo="user.pseudo"
          :bio="user.bio"
          :showBtn="true"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import OneUser from "@/components/OneUser.vue";

export default {
  name: "AllUsers",
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
};
</script>
