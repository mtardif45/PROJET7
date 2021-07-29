<template>
  <div>
    <div class="card mb-3 p-2" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="../assets/87-512.png"
            style="width: 42px"
            alt="photo de profil"
          />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title" :pseudo="user.pseudo">{{ pseudo }}</h5>

            <p class="card-text">
              {{ email }}
            </p>
            <p class="card-text">
              {{ bio }}
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
    email: String,
    avatar: String,
    showBtn: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    showUser(id) {
      this.$router.push(`accounts/${id}`);
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  beforeMount() {
    this.$store.dispatch("getUserById");
  },
};
</script>