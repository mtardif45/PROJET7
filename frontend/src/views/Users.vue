<template>
  <div id="users">
    <div class="row align-items-center text-center justify-content-center">
      <UsersList />
    </div>
  </div>
</template>

<script>
import UsersList from "../components/UsersList.vue";

export default {
  name: "Users",
  components: {
    UsersList,
  },
};
</script>
