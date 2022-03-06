<template>
  <div>
    <b-card>
      <h1 class="centerT">Register</h1>
      <br>
      <b-form class="customForm" @submit="onSubmit">
        <b-form-group id="input-group-1" label="Firstname" label-for="input-1">
          <b-form-input
              id="input-1"
              v-model="form.firstname"
              type="text"
              placeholder="Enter your firstname"
              class="leftT"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Lastname" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="form.lastname"
              type="text"
              placeholder="Enter your lastname"
              class="leftT"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Email" label-for="input-3">
          <b-form-input
              id="input-3"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="leftT"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Password" label-for="input-4">
          <b-form-input
              id="input-4"
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              required
          ></b-form-input>
        </b-form-group>

        <div v-show="message">{{ message }}</div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      message: null
    };
  },
  methods: {
    ...mapActions({
      register: 'register',
    }),
    async onSubmit(event) {
      event.preventDefault();
      const response = await this.register(this.form)
      console.log(response)
      if (response === 200) {
        this.message = "Compte crée"
      } else {
        this.message = "Erreur lors de la création du compte"
      }
    },
  },
};
</script>

<style scoped>

.card {
  margin: 50px auto auto auto !important;
  width: 500px;
  padding: 20px;
}

</style>