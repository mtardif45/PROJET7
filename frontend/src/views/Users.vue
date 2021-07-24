<template>
  <div class="users">
    <h1 class="mb-3">Tous les Utilisateurs</h1>
    <div class="row">
      <div class="col-6" v-for="user in users" :key="user.id">
        {{ user.pseudo + "" + user.bio }}
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
  name: "Users",
  components: {
    OneUser,
  },
  data() {
    return {};
  },
};
</script>
