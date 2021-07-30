<template>
  <div class="newpost">
    <div class="wrapper">
      <div class="col-md-8 col-md-offset-2">
        <h1>Create post</h1>
        <div id="form-content">
          <form action="" method="POST">
            <div v-if="!submitted">
              <div class="form-group">
                <label for="pseudo">
                  Pseudo <span class="require"></span
                ></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pseudo"
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
                  v-model="imageUrl"
                  name="imageUrl"
                />
              </div>

              <div class="form-group">
                <label for="description"> Message</label>
                <textarea
                  rows="5"
                  class="form-control"
                  v-model="message"
                  name="description"
                >
                </textarea>
              </div>

              <div class="form-group">
                <button class="btn btn-success" @click="newPost">Create</button>
                <button class="btn btn-default">Cancel</button>
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
//import PostService from "../services/PostService.js";

export default {
  name: "CreatePost",
  data() {
    return {
      pseudo: "",
      message: "",
      imageUrl: "",
      submitted: false,
    };
  },
  methods: {
    newPost(data) {
      this.$store.dispatch("createPost", data);
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
</style>
