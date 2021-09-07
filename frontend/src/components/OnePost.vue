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

          <p>Image:</p>
          <img
            class="mx-auto"
            width="250"
            :src="post.imageUrl"
            alt="image postée par l'utilisateur"
          />

          <!--  update image  -->
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
            <button
              v-if="this.$store.state.user.pseudo == post.pseudo"
              @click="updateImage()"
            >
              Editer
            </button>
          </div>
          <!-- message -->
          <div class="card-body">
            <span class="card-title">Description:</span>
            <span class="card-text">
              {{ post.message }}
            </span>
          </div>

          <!-- update message -->
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
            <button
              v-if="this.$store.state.user.pseudo == post.pseudo"
              @click="updateMessage()"
            >
              Editer
            </button>
          </div>

          <!--  footer options: like, comment & save post if updated -->
          <div class="footer pb-3">
            <input
              type="button"
              value="Like"
              aria-label="liker le post"
              class="btn btn-outline-success mr-2"
              @click="likePost(post.id)"
            />

            <input
              type="button"
              v-if="this.$store.state.user.pseudo == post.pseudo"
              value="Save"
              class="btn btn-success"
              aria-label="Sauvegarder le post"
              @click.prevent="savePost()"
            />
            <button class="btn btn-warning ml-2">
              <router-link to="/posts" id="cancel">Annuler</router-link>
            </button>
          </div>

          <div class="row">
            <div class="d-flex col post-comment m-2">
              <img
                :src="this.$store.state.user.avatar"
                alt="photo de profil"
                class="profile-photo-sm"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Post a comment"
              />
            </div>
            <input
              type="button"
              value="Commenter"
              aria-label="commenter le post"
              class="btn btn-success"
              @click="addComment(post.id)"
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
  name: "OnePost",
  data() {
    return {
      post: {},
      message: "",
      file: "",
      withImage: false,
      withMessage: false,
      // comments: [],
      comment: {},
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
      fd.append("id", id);
      fd.append("pseudo", this.post.pseudo);
      fd.append("userId", this.post.userId);
      fd.append("message", this.message || this.post.message);
      fd.append("imageUrl", this.post.imageUrl ? this.post.imageUrl : null);
      fd.append("image", this.file);
      this.$store.dispatch("updatePost", id, fd);
      this.withImage = false;
      this.withMessage = false;
      console.log(...fd);
      // this.$router.push("/posts");
    },

    // addComment(id) {
    //   this.$store.dispatch("getPosts");
    //   this.$store.dispatch("commentPost", {
    //     id: id,
    //     comment: this.comment,
    //   });
    //   this.comment.message = "";
    //   this.$store.dispatch("getPosts");
    //   this.$store.dispatch("getPostById", this.post.id);
    // },
    // deleteComment(id) {
    //   this.$store.dispatch("deleteComment", id);
    // },
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
.post-content .post-container .post-detail .post-comment {
  display: inline-flex;
  margin: 10px auto;
  width: 100%;
}

.post-content .post-container .post-detail .post-comment img.profile-photo-sm {
  margin-right: 10px;
}

.post-content .post-container .post-detail .post-comment .form-control {
  height: 30px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin: 7px 0;
  min-width: 0;
}

img.profile-photo-md {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

img.profile-photo-sm {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>
