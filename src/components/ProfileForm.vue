<template>
  <b-form>
    <b-form-group id="input-group-firstname" label="Prénom" label-for="input-firstname">
      <b-form-input
          id="input-firstname"
          v-model="form.firstname"
      >{{form.firstname}}</b-form-input>
    </b-form-group>

    <b-form-group id="input-group-lastname" label="Nom" label-for="input-lastname">
      <b-form-input
          id="input-lastname"
          v-model="form.lastname"
      >{{form.lastname}}</b-form-input>
    </b-form-group>

    <b-form-group id="input-group-email" label="Email" label-for="input-email">
      <b-form-input
          id="input-email"
          type="email"
          v-model="form.email"
      >{{form.email}}</b-form-input>
    </b-form-group>

    <b-form-group id="input-group-password" label="Nouveau mot de passe" label-for="input-password">
      <b-form-input
          id="input-password"
          type="password"
          v-model="form.password"
      ></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "ProfileForm",
  props: {
    form: Object
  },
}
</script>

<style scoped>

</style>