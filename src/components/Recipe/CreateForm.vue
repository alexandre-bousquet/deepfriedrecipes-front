<template>
  <b-form>
    <b-form-group id="input-group-name" label="Nom de votre recette" label-for="input-name">
      <b-form-input
          id="input-name"
          v-model="form.name_recette"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="textArea-group-description" label="Description de votre recette" label-for="textArea-description">
      <b-form-textarea
          id="textArea-description"
          v-model="form.description_recette"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group id="textArea-group-ingredients" label="Ingrédients de votre recette" label-for="textArea-ingredients">
      <b-form-textarea
          id="textArea-ingredients"
          v-model="form.ingredients_recette"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group id="textArea-group-etapes" label="Etapes de votre recette" label-for="textArea-etapes">
      <b-form-textarea
          id="textArea-etapes"
          v-model="form.etapes_recettes"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group id="input-group-temps" label="Temps de préparation de votre recette" label-for="input-temps">
      <b-form-input
          id="input-temps"
          v-model="form.temps_recette"
      ></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "CreateForm",
  props: {
    form: Object
  },
}
</script>

<style scoped>

</style>