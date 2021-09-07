<template>
  <div id="profile">
    <OneUser />

    <div class="options d-flex justify-content-center">
      <EditUserBtn />

      <DeleteUserBtn />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import axios from "axios";
import OneUser from "../components/OneUser.vue";
import DeleteUserBtn from "../components/DeleteUserBtn.vue";
import EditUserBtn from "../components/EditUserBtn.vue";

export default {
  name: "Profile",
  components: {
    OneUser,
    DeleteUserBtn,
    EditUserBtn,
  },
  data() {
    return {
      editBio: false,
      editAvatar: false,
      editEmail: false,
    };
  },
  methods: {
    updateAvatar() {
      this.editAvatar = true;
    },
    updateBio() {
      this.editBio = true;
    },
    updateEmail() {
      this.editEmail = true;
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}
.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}
.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}
.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>