<template>
  <div>
    <h2 class="centerT">Toutes les recettes</h2>
    <br />
    <b-card-group deck>
      <b-card
        v-for="recipe in recipes"
        :key="recipe._id"
        :title="recipe.name_recette"
        :img-src="
          'https://deepfriedrecipes-be35.restdb.io/media/' +
          recipe.image_recette[0]
        "
        :img-alt="recipe.image_recette[0]"
        img-top
        class="mb-2"
      >
        <b-card-text>
          {{ recipe.description_recette }}
        </b-card-text>

        <b-button href="#" variant="primary">Voir la recette</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
  async mounted() {
    this.$store.dispatch("initRecipes");
  },
};
</script>

<style scoped>
.card-group .card {
  max-width: 25%;
}
</style>