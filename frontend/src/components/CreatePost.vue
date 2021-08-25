<template>
  <div class="newpost">
    <div class="wrapper">
      <div class="col-md-8 col-md-offset-2">
        <h1>Nouvelle publication</h1>

        <!-- Login Form -->

        <div id="form-content">
          <form method="POST" @submit.prevent="newPost">
            <div>
              <div class="form-group">
                <label for="pseudo"> Pseudo </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="post.pseudo"
                  name="pseudo"
                  placeholder="pseudo"
                  required
                />
              </div>
              <div class="form-group">
                <label for="userid"> UserId </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="post.userId"
                  name="userId"
                  placeholder="userId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="imageUrl"> Image </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="post.imageUrl"
                  name="imageUrl"
                  placeholder="imageUrl"
                  required
                />
              </div>

              <div class="form-group">
                <label for="description"> Message</label>
                <textarea
                  rows="5"
                  class="form-control"
                  v-model="post.message"
                  name="description"
                  placeholder="message"
                  required
                >
                </textarea>
              </div>

              <div class="form-group">
                <input
                  type="button"
                  class="btn-success"
                  value="Publier"
                  v-on:click.prevent="newPost()"
                />

                <button class="btn btn-danger ml-2">
                  <router-link to="/" id="cancel">Annuler</router-link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        userId: this.$store.state.user.id,
        pseudo: this.$store.state.user.pseudo,
        message: "",
        imageUrl: "",
      },
    };
  },

  methods: {
    newPost(e) {
      axios
        .post("http://localhost:3000/api/posts/add", this.post)
        .then((result) => {
          console.log(result);
          alert("Post successfully created!");
        })
        .then(() => this.$router.push("/posts"));
      e.preventDefault();
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
