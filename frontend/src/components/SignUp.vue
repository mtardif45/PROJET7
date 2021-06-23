<template>
  <div>
    <h1>Création de compte</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          v-model="user.name"
          v-validate="'required'"
          name="name"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('name') }"
        />
        <div v-if="submitted && errors.has('name')" class="invalid-feedback">
          {{ errors.first("name") }}
        </div>
      </div>
      <div class="form-group">
        <label for="pseudo">Pseudo</label>
        <input
          type="text"
          v-model="user.pseudo"
          v-validate="'required'"
          name="pseudo"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('pseudo') }"
        />
        <div v-if="submitted && errors.has('pseudo')" class="invalid-feedback">
          {{ errors.first("pseudo") }}
        </div>
      </div>
      <div class="form-group">
        <label for="bio">Bio</label>
        <input
          type="text"
          v-model="user.bio"
          v-validate="'required'"
          name="bio"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('bio') }"
        />
        <div v-if="submitted && errors.has('bio')" class="invalid-feedback">
          {{ errors.first("bio") }}
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email "
          v-model="user.email"
          v-validate="'required'"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('email') }"
        />
        <div v-if="submitted && errors.has('email')" class="invalid-feedback">
          {{ errors.first("email") }}
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        />
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Créer mon compte!</button>
        <router-link to="/Login" class="btn btn-link"></router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        name: "",
        pseudo: "",
        bio: "",
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  methods: {},
};
</script>
