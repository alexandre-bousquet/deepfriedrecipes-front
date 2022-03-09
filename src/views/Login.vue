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

          <div v-show="message">{{ message }}</div>
          <b-button type="submit" variant="primary">Se connecter</b-button>
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
      form: {
        email: "",
        password: "",
      },
      message: null
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const response = await this.$store.dispatch("login", this.form)
      console.log({response})
      if (response === 200) {
        this.message = "Connexion réussie !"
        await this.$router.push("/")
      } else {
        this.message = "Login ou mot de passe ou incorrect."
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