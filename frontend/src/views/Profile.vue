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
          <div v-if="editPseudo" class="text-box">
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
          </div>

          <div>
            <img
              class="img-fluid img-thumbnail rounded-circle mr-3 mt-3"
              width="150px"
              :src="user.avatar"
              alt="photo de profil"
            />
          </div>
          <!-- update avatar -->
          <div v-if="editAvatar" class="text-box">
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
          </div>

          <div class="mt-3">
            <p>Email:</p>
            <p>{{ user.email }}</p>
          </div>
          <!-- update email -->
          <div v-if="editEmail" class="text-box">
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
          </div>

          <div class="bio">
            <p>Présentation:</p>
            <p>{{ user.bio }}</p>
          </div>

          <!-- update bio -->
          <div v-if="editBio" class="text-box">
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
          <div class="card-footer">
            <button
              class="btn btn-sm bg-success px-5"
              aria-label="Modifier"
              @click.prevent="modifyUser()"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: "Profile",
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
    updateAvatar() {
      this.editAvatar = true;
    },
    updatePseudo() {
      this.editPseudo = true;
    },
    updateBio() {
      this.editBio = true;
    },
    updateEmail() {
      this.editEmail = true;
    },
    onFileSelected() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    modifyUser() {
      let id = this.$route.params.id;
      const fd = new FormData();
      fd.append("id", id);
      fd.append("pseudo", this.user.pseudo);
      fd.append("email", this.user.email);
      fd.append("bio", this.user.bio);
      fd.append("avatar", this.user.avatar ? this.user.avatar : null);
      fd.append("image", this.file);
      fd.append("updatedAt", this.user.updatedAt);

      this.$store.dispatch("updateAccount", { id, fd });
      // this.editPseudo = false;
      // this.editEmail = false;
      // this.editBio = false;
      // this.editAvatar = false;
      console.log(...fd);
      alert("user updated successfully");
      this.$router.go();
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
  background-color: rgb(198, 187, 245);
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