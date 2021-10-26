<template>
  <div>
    <div class="mt-3">
      <button class="btn btn-primary" @click="getBack()">
        <i class="fas fa-arrow-circle-left"></i> Retour
      </button>
    </div>

    <div class="container mx-auto mt-1">
      <h1>Détail du profil</h1>

      <div class="row d-flex justify-content-center">
        <div class="card col-md-8 text-center mt-2">
          <p class="font-weight-bold text-uppercase">{{ user.pseudo }}</p>

          <!-- update pseudo -->
          <!-- <div v-if="editPseudo" class="text-box">
            <input
              type="text"
              name="pseudo"
              v-model="user.pseudo"
              required
              class="mr-5 ml-3 text-area"
            />
          </div>
          <div class="text-center pt-2 pb-4">
            <button @click="updatePseudo()">Editer</button>
          </div> -->

          <div>
            <img
              class="img-fluid img-thumbnail rounded-circle mr-3 mt-3"
              width="150px"
              :src="user.avatar"
              alt="photo de profil"
            />
          </div>
          <!-- update avatar -->
          <!-- <div v-if="editAvatar" class="text-box">
            <input
              @change="onFileSelected"
              type="file"
              aria-label="image input"
              accept="image/*"
              ref="file"
              name="image"
            />
          </div>
          <div class="text-center pt-2 pb-4">
            <button @click="updateAvatar()">Editer</button>
          </div> -->

          <div class="mt-3">
            <p>Email:</p>
            <p>{{ user.email }}</p>
          </div>
          <!-- update email -->
          <!-- <div v-if="editEmail" class="text-box">
            <input
              type="email"
              name="email"
              v-model="user.email"
              required
              class="mr-5 ml-3 text-area"
            />
          </div>
          <div class="text-center pt-2 pb-4">
            <button @click="updateEmail()">Editer</button>
          </div> -->

          <div class="bio">
            <p>Présentation:</p>
            <p>{{ user.bio }}</p>
          </div>

          <!-- update bio -->
          <!-- <div v-if="editBio" class="text-box">
            <input
              type="text"
              name="bio"
              v-model="user.bio"
              required
              class="mr-5 ml-3 text-area"
            />
          </div>
          <div class="text-center pt-2 pb-4">
            <button @click="updateBio()">Editer</button>
          </div> -->

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
          <!-- <div class="card-footer">
            <button
              class="btn btn-sm bg-success px-5"
              aria-label="Modifier"
              @click.prevent="modifyUser()"
            >
              Modifier
            </button>
          </div> -->
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
  getBack() {
    this.$router.push("/accounts");
  },
};
</script>

<style scoped>
.card {
  background: rgb(250, 228, 228);
  border: 1px solid #1f1c1d;
  color: rgba(10, 10, 10, 0.8);
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
</style>