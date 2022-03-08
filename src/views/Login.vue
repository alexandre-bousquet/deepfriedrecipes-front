<template>
    <b-card>
      <div v-if="$store.getters.getUser == null">
        <h1 class="centerT">Login</h1>
        <br>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
                class="leftT"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Enter your password"
                required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
      <div v-else class="centerT">
        Vous êtes déjà connecté
      </div>
    </b-card>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      login: 'login',
    }),
    async onSubmit(event) {
      event.preventDefault();
      const response = await this.login(this.form)
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