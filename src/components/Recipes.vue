<template>
  <div class="marAuto">
    <h2 class="centerT padBot20">Toutes les recettes</h2>
    <b-card-group deck>
      <b-card
        v-for="recipe in recipes"
        :key="recipe._id"
        :title="recipe.name_recette + ' (' + recipe.temps_recette + ')'"
        :img-src="
          'https://restbd-alex.tinygoblins.fr/media/' +
          recipe.image_recette[0]
        "
        :img-alt="recipe.image_recette[0]"
        img-top
        class="mb-2"
      >
        <b-card-text>
          {{ recipe.description_recette }}
        </b-card-text>

        <RouterLink :to="'recipe/' + recipe._id" class="custom-button">Voir la recette</RouterLink>
<!--        <b-button href="#" variant="primary"><RouterLink :to="{ name: 'recipe' + recipe._id, params: { recipeId: recipe._id }}">Voir la recette</RouterLink></b-button>-->
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
    await this.$store.dispatch("initRecipes");
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 500px;
}

.marAuto {
  margin: auto !important;
}

.card-group {
  max-width: 100%;
}

.card {
  max-width: 600px;
}

.padBot20 {
  padding-bottom: 20px;
}
</style>