<template>
  <div class="newpost">
    <div class="wrapper">
      <div class="col-md-8 col-md-offset-2">
        <h1>Nouvelle publication</h1>
        <div id="form-content">
          <form method="POST" @submit.prevent="newPost">
            <div v-if="!submitted">
              <div class="form-group">
                <label for="userId">
                  Pseudo <span class="require"></span
                ></label>
                <input
                  type="text"
                  class="form-control"
                  v-mode="post.pseudo"
                  name="pseudo"
                />
              </div>
              <div class="form-group">
                <label for="imageUrl">
                  Image <span class="require"></span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="post.imageUrl"
                  name="imageUrl"
                />
              </div>

              <div class="form-group">
                <label for="description"> Message</label>
                <textarea
                  rows="5"
                  class="form-control"
                  v-model="post.message"
                  name="description"
                >
                </textarea>
              </div>

              <div class="form-group">
                <button class="btn btn-success" @click="newPost">Create</button>
                <button class="btn btn-success ml-2">
                  <router-link to="/" id="cancel">Annuler</router-link>
                </button>
              </div>
            </div>

            <div v-else>
              <h4>You submitted successfully!</h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService.js";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        id: null,
        message: "",
        imageUrl: "",
      },
      submitted: false,
    };
  },
  methods: {
    newPost() {
      const data = {
        userId: this.post.userId,
        pseudo: this.post.user.pseudo,
        message: this.post.message,
        imageUrl: this.post.imageUrl,
      };

      PostService.createPost(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error);
        });
      // this.$store.dispatch("createPost", formData);
      // this.$router.push("/posts");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#cancel {
  color: white;
}
</style>
