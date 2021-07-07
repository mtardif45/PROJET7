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
                <input type="text" class="form-control" name="pseudo" />
              </div>
              <div class="form-group">
                <label for="imageUrl">
                  Image <span class="require"></span>
                </label>
                <input type="text" class="form-control" name="imageUrl" />
              </div>

              <div class="form-group">
                <label for="description">Message</label>
                <textarea
                  rows="5"
                  class="form-control"
                  name="description"
                ></textarea>
              </div>

              <div class="form-group">
                <button @click="savePost" class="btn btn-success">
                  Create
                </button>
                <button class="btn btn-default">Cancel</button>
              </div>
            </div>

            <div v-else>
              <h4>You submitted successfully!</h4>
              <button class="btn btn-success" @click="newPost">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        id: null,
        pseudo: "",
        message: "",
        imageUrl: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    savePost(data) {
      data = {
        pseudo: this.post.pseudo,
        message: this.post.message,
        imageUrl: this.post.imageUrl,
      };

      PostService.create(data)
        .then((response) => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((error) => console.log(error));
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
