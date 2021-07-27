<template>
  <div>
    <div class="card mb-3 p-2" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="../assets/87-512.png" style="width: 150px" alt="photo" />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">{{ pseudo }}</h5>
            <p class="card-text">
              {{ pseudo }}
            </p>
            <p class="card-text">
              <small class="text-muted">{{ bio }}</small>
            </p>
          </div>

          <div class="card-footer">
            <input
              type="button"
              class="btn btn-primary fadeIn fourth"
              value="voir le profil"
              v-on:click="showUser(id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneUser",
  props: {
    id: Number,
    pseudo: String,
    bio: String,
    avatar: String,
    showBtn: Boolean,
  },
  methods: {
    showUser(id) {
      this.$router.push(`users/${id}`);
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    beforeMount() {
      return this.$store.dispatch("getUserById");
    },
  },
};
</script>