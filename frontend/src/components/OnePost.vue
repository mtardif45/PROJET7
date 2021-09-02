<template>
  <div id="post" class="container mx-auto mt-4">
    <h1>Détail de la publication</h1>

    <div class="row d-flex justify-content-center">
      <div>
        <div class="card text-center mt-4" style="width: 40rem">
          <div class="d-flex justify-content-center p-2">
            <p class="mr-2">Pseudo:</p>
            <p>{{ post.pseudo }}</p>
          </div>

          <!--  update image  -->
          <p>Image:</p>
          <img
            class="mx-auto"
            width="250"
            :src="post.imageUrl"
            alt="image postée par l'utilisateur"
          />
          <div v-if="withImage" class="text-box">
            <label for="image">Image </label>
            <input
              @change="onFileSelected"
              type="file"
              aria-label="image input"
              accept="image/*"
              ref="file"
              name="image"
            />
          </div>

          <div class="text-center pt-2">
            <button @click="updateImage()">Editer</button>
          </div>

          <!-- update message -->
          <div class="card-body">
            <span class="card-title">Description:</span>
            <span class="card-text">
              {{ post.message }}
            </span>
            <div v-if="withMessage" class="text-box">
              <input
                type="text"
                name="message"
                v-model="message"
                required
                class="mr-5 ml-3 text-area"
              />
            </div>
            <div class="text-center pt-2 pb-4">
              <button @click="updateMessage()">Editer</button>
            </div>
          </div>

          <!--  footer options: like, comment & save post if updated -->
          <div class="footer">
            <a href="#" class="btn btn-outline-success mr-2"
              ><i class="fa fa-gittip"></i> Like</a
            >
            <a href="#" class="btn btn-outline-success mr-2"
              ><i class="fa fa-comment"></i> Commenter</a
            >
            <input
              type="button"
              value="Save"
              class="btn-warning"
              aria-label="Sauvegarder le post"
              @click.prevent="savePost()"
            />
            <button class="btn btn-danger ml-2">
              <router-link to="/posts" id="cancel">Annuler</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OnePost",
  data() {
    return {
      post: {},
      message: "",
      file: "",
      withImage: false,
      withMessage: false,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/posts/` + this.$route.params.id
      );
      this.post = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    onFileSelected() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    updateMessage() {
      this.withMessage = true;
    },
    updateImage() {
      this.withImage = true;
    },
    savePost() {
      let id = this.$route.params.id;
      const fd = new FormData();
      fd.append("message", this.message);
      fd.append("image", this.file);
      this.$store.dispatch("updatePost", id, fd);
      this.withImage = false;
      this.withMessage = false;
      console.log(...fd);
      //this.$router.push("/posts");
    },
  },
};

//   axios
//     .put(
//       `http://localhost:3000/api/posts/` + this.$route.params.id,
//       fd
//       // {
//       //   headers: {
//       //     Authorization: "bearer " + this.$state.token,
//       //   },
//       // }
//     )
//     .then((response) => {
//       console.log(response);
//       console.log(...fd);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// },
</script>

<style scoped>
.card {
  background: rgb(250, 228, 228);
  border: 1px solid #1f1c1d;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 2rem;
}
</style>
