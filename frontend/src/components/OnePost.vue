<template>
  <div id="post" class="container mx-auto mt-4">
    <h1>Détail de la publication</h1>

    <div class="row d-flex justify-content-center">
      <div>
        <div class="card text-center mt-4" style="width: 40rem">
          <div class="d-flex align-items-start p-2">
            <p class="mr-2">Pseudo:</p>
            <p>{{ post.pseudo }}</p>
          </div>

          <!--  update image  -->
          <div v-if="showImage">
            <p>Image:</p>
            <img
              class="mx-auto"
              width="250"
              :src="post.imageUrl"
              alt="image postée par l'utilisateur"
            />
          </div>
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
          <div class="card-text">
            <!-- update message -->
            <div v-if="showMessage">
              <p class="card-title">Description:</p>
              <p class="card-text">
                {{ post.message }}
              </p>
            </div>
            <div v-if="withMessage" class="text-box">
              <textarea
                label="Message"
                v-model="message"
                text="text"
                solo
                type="text"
                required
                name="description"
                class="mr-5 ml-3 text-area"
              ></textarea>
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
      withImage: false,
      withMessage: false,
      showImage: true,
      showMessage: true,
      message: "",
      file: "",
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
      this.showMessage = false;
    },
    updateImage() {
      this.withImage = true;
      this.showImage = false;
    },
    savePost() {
      //let id = this.$route.params.id;
      const fd = new FormData();
      fd.append("message", this.message);
      fd.append("image", this.file);
      this.$store.dispatch("updatePost", fd);
      // this.$store.dispatch("getPostById", id);
      this.showImage = true;
      this.showMessage = true;
      this.withImage = false;
      this.withMessage = false;
      console.log(...fd);
      //this.$router.push("/posts");
    },
  },
};
</script>

<style scoped>
.card {
  background: rgb(240, 182, 182);
  border: 1px solid #1f1c1d;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 2rem;
}
</style>
