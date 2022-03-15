<template>
    <b-card>
      <div v-if="$store.getters.getUser == null">
        <h1 class="centerT">Connexion</h1>
        <br>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Entrez votre adresse mail"
                class="leftT"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Mot de passe" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Entrez votre mot de passe"
                required
            ></b-form-input>
          </b-form-group>

          <div v-if="!isLoading">
            <div v-show="message">{{ message }}</div>
            <br>
            <b-button type="submit" variant="primary">Se connecter</b-button>
          </div>
          <div v-else>
            <b-button variant="primary" disabled>
              <b-spinner small></b-spinner>
              Connexion...
            </b-button>
          </div>
        </b-form>
      </div>
      <div v-else class="centerT">
        Vous êtes déjà connecté !
      </div>
    </b-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      form: {
        email: "",
        password: "",
      },
      message: null
    };
  },
  methods: {
    async onSubmit(event) {
      this.isLoading = true
      event.preventDefault();
      const response = await this.$store.dispatch("login", this.form)
      console.log({response})
      if (response === 200) {
        this.message = "Connexion réussie !"
        await this.$router.push("/")
      } else {
        this.message = "Login ou mot de passe ou incorrect."
      }
      this.isLoading = false
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