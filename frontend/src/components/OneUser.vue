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
        <div class="card text-center mt-2" style="width: 40rem">
          <p class="font-weight-bold text-uppercase">{{ user.pseudo }}</p>

          <!-- update pseudo -->
          <div v-if="editPseudo" class="text-box">
            <input
              v-if="this.$store.state.user.id == user.id"
              type="text"
              name="pseudo"
              v-model="user.pseudo"
              required
              class="mr-5 ml-3 text-area"
            />
          </div>
          <div
            class="text-center pt-2 pb-4"
            v-if="this.$store.state.user.id == user.id"
          >
            <button @click="updatePseudo()">Editer</button>
          </div>

          <div>
            <img
              class="img-fluid mr-3 mt-3"
              width="150px"
              :src="user.avatar"
              alt="photo de profil"
            />
          </div>
          <!-- update avatar -->
          <div v-if="editAvatar" class="text-box">
            <input
              v-if="this.$store.state.user.id == user.id"
              @change="onFileSelected"
              type="file"
              aria-label="image input"
              accept="image/*"
              ref="file"
              name="image"
            />
          </div>
          <div
            class="text-center pt-2 pb-4"
            v-if="this.$store.state.user.id == user.id"
          >
            <button @click="updateAvatar()">Editer</button>
          </div>

          <div class="mt-3">
            <p>Email:</p>
            <p>{{ user.email }}</p>
          </div>
          <!-- update email -->
          <div v-if="editEmail" class="text-box">
            <input
              v-if="this.$store.state.user.id == user.id"
              type="email"
              name="email"
              v-model="user.email"
              required
              class="mr-5 ml-3 text-area"
            />
          </div>
          <div
            class="text-center pt-2 pb-4"
            v-if="this.$store.state.user.id == user.id"
          >
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
          <div
            class="text-center pt-2 pb-4"
            v-if="this.$store.state.user.id == user.id"
          >
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
          <div
            class="justify-content-center"
            v-if="this.$store.state.user.id == user.id"
          >
            <input
              type="button"
              value="Modifier"
              class="btn btn-success mr-2"
              aria-label="Modifier"
              @click.prevent="modifyUser()"
            />

            <input
              type="button"
              value="Annuler"
              class="btn btn-warning"
              aria-label="Annuler"
              @click="getBack()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OneUser",
  data() {
    return {
      user: {
        admin: false,
      },
      editAvatar: false,
      editPseudo: false,
      editBio: false,
      editEmail: false,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/accounts/` + this.$route.params.id
      );
      this.user = response.data;
    } catch (error) {
      this.error = error;
    }
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
      fd.append("image", this.user.avatar ? this.user.avatar : null);
      fd.append("image", this.file);
      fd.append("updatedAt", this.user.updatedAt);

      this.$store.dispatch("updateAccount", { id, fd });
      this.editPseudo = false;
      this.editEmail = false;
      this.editBio = false;
      this.editAvatar = false;
      console.log(...fd);
      alert("user updated successfully");
    },

    getBack() {
      this.$router.push("/accounts");
    },
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
.btn-labeled {
  padding-top: 0;
  padding-bottom: 0;
}
.btn {
  margin-bottom: 10px;
}
</style>