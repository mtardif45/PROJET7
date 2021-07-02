<template>
  <div class="newpost">
    <Header />
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1>Create post</h1>

        <form action="" method="POST">
          <div class="form-group">
            <label for="pseudo"> Pseudo <span class="require"></span></label>
            <input type="text" class="form-control" name="pseudo" />
          </div>
          <div class="form-group">
            <label for="imageUrl"> Image <span class="require"></span> </label>
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
            <button type="submit" class="btn btn-primary">Create</button>
            <button class="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "CreatePost",
  components: {
    Header,
  },
};
</script>

<style scoped>
</style>
