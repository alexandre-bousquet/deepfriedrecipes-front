<template>
  <div>
    <h2 class="centerT">Recette</h2>
    <br />
    <b-card-group deck>
      <b-card
          :title="recipe.name_recette"
          img-top
          class="mb-2"
      >
<!--        <b-card
          :title="recipe.name_recette"
          :img-src="recipe.image_recette[0] ? 'https://deepfriedrecipes-be35.restdb.io/media/' + recipe.image_recette[0] : null"
          :img-alt="recipe.image_recette[0] ? 'https://deepfriedrecipes-be35.restdb.io/media/' + recipe.image_recette[0] : null"
          img-top
          class="mb-2"
      >-->
        <b-card-text>
          {{ recipe.description_recette }}
          {{ recipe.temps_recette }}
          {{ recipe.ingredients_recette }}
          {{ recipe.etapes_recette }}
          {{ recipe.user[0].email }}
        </b-card-text>

      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Recipe",
  props: {
    recipeId: String
  },
  data() {
    return {
      recipe: {},
    }
  },
  computed: {
    ...mapGetters({
      getRecipe: 'getRecipe',
      getRecipes: 'getRecipes'
    })
  },
  async mounted() {
    /*console.log(this.recipeId);
    console.log(this.getRecipe(this.recipeId));*/
    if (this.getRecipes.length <= 0) {
      await this.$store.dispatch("initRecipes");
    }
    this.recipe = this.getRecipe(this.recipeId);
  },
};
</script>

<style scoped>

</style>