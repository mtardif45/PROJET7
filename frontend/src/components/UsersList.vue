<template>
  <div class="container">
    <h1 class="mb-2">Tous les Utilisateurs</h1>
    <div
      class="row row-cols row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm"
    >
      <div class="col-4" v-for="user in users" :key="user.id">
        <div class="main-body">
          <div class="col mb-3">
            <div class="card">
              <div class="card-body text-center">
                <img
                  style="width: 120px"
                  class="img-fluid img-thumbnail rounded-circle"
                  :src="user.avatar"
                />
                <h5 class="card-title">{{ user.pseudo }}</h5>
                <p class="text-secondary mb-1">{{ user.bio }}</p>
                <p class="text-muted font-size-sm">{{ user.email }}</p>

                <div class="card-footer text-center">
                  <router-link :to="`/accounts/${user.id}`">
                    <button class="btn btn-sm bg-info has-icon btn-block">
                      <i class="fas fa-eye"></i>
                    </button>
                  </router-link>

                  <button
                    v-if="
                      $store.state.user.admin === 1 ||
                      $store.state.user.id === user.id
                    "
                    value="Supprimer"
                    class="btn btn-sm bg-danger has-icon btn-block mt-2"
                    aria-label="supprimer le compte"
                    @click="deleteUser(user.id)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UsersList",
  data() {
    return {
      user: {
        admin: null,
      },
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  beforeMount() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("deleteAccount", id);
      alert("account deleted successfully");
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 3px 0 rgba(128, 8, 122, 0.125),
    0 1px 2px 0 rgba(155, 11, 148, 0.125);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  /* min-height: 1px; */
  height: 350px;
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
.card-footer {
  background: white;
  padding: 0.5rem 1rem;
  border-top: 0 solid rgba(0, 0, 0, 0.125);
}
</style>