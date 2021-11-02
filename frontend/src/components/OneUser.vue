<template>
  <div>
    <div class="mt-1">
      <button
        class="btn btn-back font-weight-bold text-white"
        @click="getBack()"
      >
        <i class="fas fa-arrow-circle-left"></i> Retour
      </button>
    </div>

    <div class="container mx-auto mt-1">
      <h1>Détail du profil</h1>

      <div class="row d-flex justify-content-center">
        <div class="card col-md-8 text-center mt-2">
          <p class="font-weight-bold text-uppercase">{{ user.pseudo }}</p>

          <div>
            <img
              class="img-fluid img-thumbnail rounded-circle mr-3 mt-3"
              width="150px"
              :src="user.avatar"
              alt="photo de profil"
            />
          </div>

          <div class="mt-3">
            <p><u>Email:</u></p>
            <p class="font-weight-bold">{{ user.email }}</p>
          </div>

          <div class="bio">
            <p><u>Présentation:</u></p>
            <p class="font-weight-bold">{{ user.bio }}</p>
          </div>

          <!--  date de création  -->
          <div class="createDateTime">
            <span>
              Créé le: {{ user.createdAt | moment("DD-MM-YYYY HH:mm") }}</span
            >
          </div>
          <!--  date de mise à jour  -->
          <div class="updateDateTime">
            <span>
              Modifié le:
              {{ user.updatedAt | moment("DD-MM-YYYY HH:mm") }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneUser",
  data() {
    return {
      editAvatar: false,
      editPseudo: false,
      editBio: false,
      editEmail: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  beforeMount() {
    let id = this.$route.params.id;
    this.$store.dispatch("getUserById", id);
    console.log(id);
  },
  methods: {
    getBack() {
      this.$router.push("/accounts");
    },
  },
};
</script>

<style scoped>
.card {
  background: rgb(170, 80, 133);
  border: 1px solid #1f1c1d;
  color: white;
  font-size: 16px;
  margin-bottom: 2rem;
}
.btn-label {
  position: relative;
  left: -12px;
  display: inline-block;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px 0 0 3px;
}

.btn {
  margin-bottom: 10px;
}
.btn-back {
  background-color: #0000ff;
}
</style>