<template>
  <div id="post" class="container mx-auto mt-4">
    <button class="btn btn-primary" @click="getBack()">
      <i class="fas fa-arrow-circle-left"></i> Retour
    </button>

    <h1>Détail de la publication</h1>
    <div class="row d-flex justify-content-center">
      <div>
        <div class="card text-center mt-4" style="width: 40rem">
          <div class="d-flex justify-content-center p-2">
            <p class="mr-2">Pseudo:</p>
            <p>{{ post.pseudo }}</p>
          </div>

          <p>Image:</p>
          <img class="mx-auto" width="250" :src="post.imageUrl" alt="image" />

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
              v-if="this.$store.state.user.id == post.userId"
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
              v-if="this.$store.state.user.id == post.userId"
              @click="updateMessage()"
            >
              Editer
            </button>
          </div>
          <!--  date de création  -->
          <div class="createDateTime">
            <span>
              Créé le: {{ post.createdAt | moment("DD-MM-YYYY HH:mm") }}</span
            >
          </div>
          <!--  date de mise à jour  -->
          <div class="updateDateTime">
            <span>
              Modifié le:
              {{ post.updatedAt | moment("DD-MM-YYYY HH:mm") }}</span
            >
          </div>

          <!--  footer options: like, comment & save post if updated -->
          <div class="footer pb-3">
            <button class="like mr-2" @click="likePost(post.id)">
              <i
                class="fa fa-thumbs-o-up"
                aria-hidden="true"
                v-bind:class="[isActive ? 'pink' : 'red']"
                @click="toggleClass()"
              ></i>
            </button>
            <button class="dislike" @click="deleteLike(like.id)">
              <i
                class="fa fa-thumbs-o-down"
                aria-hidden="true"
                v-bind:class="[isActive ? 'pink' : 'grey']"
                @click="isActive = !isActive"
              ></i>
            </button>

            <input
              type="button"
              v-if="this.$store.state.user.id === post.userId"
              value="Save"
              class="btn btn-success ml-3"
              aria-label="Sauvegarder le post"
              @click.prevent="savePost()"
            />
          </div>
          <!--  create a comment -->
          <div class="row form-group" @submit.prevent="addComment(post.id)">
            <div class="d-flex col post-comment m-2">
              <label for="image"></label>
              <img
                :src="this.$store.state.user.avatar"
                alt="photo de profil"
                class="profile-photo-sm"
              />
              <label for="comment"></label>
              <input
                type="text"
                rows="4"
                v-model="data.message"
                class="form-control"
                placeholder="Post a comment"
              />
            </div>
            <button
              aria-label="commenter le post"
              class="btn btn-sm has-icon btn-comment"
              @click.prevent="addComment(post.id)"
            >
              <i class="fas fa-comment-dots"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--  section d'affichage de la liste de commentaires sur ce post -->
    <div class="col text-center mx-auto" style="max-width: 35rem">
      <h2 class="badge badge-secondary">Commentaires sur ce post...</h2>
      <div
        class="col text-center"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div class="card-header text-strong">
          {{ comment.pseudo }}
        </div>
        <div class="card-body d-flex">
          <p class="text-secondary">Message:</p>
          <p class="card-text font-italic ml-2">{{ comment.message }}</p>
        </div>
        <div class="card-footer">
          <span
            >Créé le: {{ comment.createdAt | moment("DD-MM-YYYY HH:mm") }}</span
          >
          <button
            v-if="
              $store.state.user.admin === 1 ||
              $store.state.user.id === comment.UserId
            "
            class="btn btn-sm btn-warning has-icon ml-5"
            aria-label="supprimer le commentaire"
            @click="deleteComment(comment.id)"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OnePost",
  components: {},
  props: {},
  data() {
    return {
      message: "",
      file: "",
      withImage: false,
      withMessage: false,
      data: {
        message: "",
        pseudo: this.$store.state.user.pseudo,
        userId: this.$store.state.user.id,
        postId: this.$route.params.id,
        createdAt: "",
      },
      comment: {},
      isActive: true,
    };
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
    comments() {
      return this.$store.getters.comments;
    },
  },
  async beforeMount() {
    let id = this.$route.params.id;
    this.$store.dispatch("getPostById", id);
    this.$store.dispatch("getComments", id);
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
      fd.append("updatedAt", this.post.updatedAt);
      fd.append("message", this.message || this.post.message);
      fd.append("imageUrl", this.post.imageUrl ? this.post.imageUrl : null);
      fd.append("image", this.file);
      this.$store.dispatch("updatePost", { id, fd });
      this.withImage = false;
      this.withMessage = false;
      console.log(...fd);
      alert("post updated!");
      this.$router.go();
    },
    getBack() {
      this.$router.push("/posts");
    },
    addComment(id) {
      this.$store.dispatch("commentPost", {
        id: id,
        data: this.data,
      });
      this.data.message = "";
      this.$store.dispatch("getPosts");
      this.$store.dispatch("getPostById", id);
      alert("commentaire publié avec succès!");
    },
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id);
      alert("comment deleted successfully!;");
      this.$router.go();
    },
    likePost(id) {
      this.$store.dispatch("likePost", {
        id: id,
        data: this.data,
      });
      alert("you liked this post");
    },
    deleteLike() {
      axios({
        method: "delete",
        url: `http://localhost:3000/api/posts/${this.post.id}/likes/`,
        data: {
          postId: this.post.id,
          userId: this.$store.state.user.id,
        },
        headers: { Authorization: this.$store.state.token },
      });
      alert("like cancelled!");
    },
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.card {
  background: rgb(244, 236, 228);
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
button.like {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: rgb(208, 231, 229);
  background-color: rgba(38, 166, 154, 0.3);
  border-color: rgba(0, 150, 136, 1);
  border-width: 1px;
  font-size: 15px;
}

button.dislike {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: rgb(240, 206, 206);
  background-color: rgba(255, 138, 128, 0.3);
  border-color: rgb(240, 17, 17);
  border-width: 1px;
  font-size: 15px;
}
.red {
  color: red;
}
.grey {
  color: grey;
}

.btn-comment {
  color: rgb(177, 35, 206);
  background: rgb(244, 236, 228);
  font-size: 26px;
}

.row {
  margin: 0 !important;
}
</style>
