<template>
  <div>
    <b-card>
      <h1 class="centerT">S'inscrire</h1>
      <br>
      <b-form class="customForm" @submit="onSubmit">
        <b-form-group id="input-group-1" label="Prénom" label-for="input-1">
          <b-form-input
              id="input-1"
              v-model="form.firstname"
              type="text"
              placeholder="Entrez votre prénom"
              class="leftT"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nom" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="form.lastname"
              type="text"
              placeholder="Entrez votre nom"
              class="leftT"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Email" label-for="input-3">
          <b-form-input
              id="input-3"
              v-model="form.email"
              type="email"
              placeholder="Entrez votre adresse mail"
              class="leftT"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Mot de passe" label-for="input-4">
          <b-form-input
              id="input-4"
              v-model="form.password"
              type="password"
              placeholder="Entrez votre mot de passe"
              required
          ></b-form-input>
        </b-form-group>

        <div v-show="message">{{ message }}</div>
        <br>
        <b-button type="submit" variant="primary">Soumettre</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>

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
    async onSubmit(event) {
      event.preventDefault();
      const response = await this.$store.dispatch("register", this.form)
      console.log(response)
      if (response === 200) {
        this.message = "Compte crée."
      } else {
        this.message = "Erreur lors de la création du compte."
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