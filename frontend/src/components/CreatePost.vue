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
                  v-model="pseudo"
                  name="pseudo"
                  placeholder="pseudo"
                  required
                />
              </div>
              <div class="form-group">
                <label for="image"> Image </label>
                <input
                  type="file"
                  ref="file"
                  class="form-control"
                  name="image"
                  @change="onFileSelected"
                  accept="image/*"
                />
              </div>

              <div class="form-group">
                <label for="description"> Message</label>
                <textarea
                  rows="5"
                  class="form-control"
                  v-model="message"
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
export default {
  name: "CreatePost",
  data() {
    return {
      pseudo: this.$store.state.user.pseudo,
      message: "",
      file: "",
    };
  },
  methods: {
    onFileSelected() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    newPost() {
      const fd = new FormData();
      fd.append("pseudo", this.pseudo);
      fd.append("userId", this.$store.state.user.id);
      fd.append("message", this.message);
      fd.append("image", this.file);
      this.$store.dispatch("createPost", fd);
      console.log(...fd);
      this.$router.push("/posts");
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
