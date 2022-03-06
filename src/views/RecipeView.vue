<template>
  <div>
    <Recipe
        v-if="recipe"
        :picture="recipe.image_recette[0]"
        :title="recipe.name_recette"
        :description="recipe.description_recette"
        :time="recipe.temps_recette"
        :ingredients="recipe.ingredients_recette"
        :stapes="recipe.etapes_recette"
        :userEmail="recipe.user[0].email"
    />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Recipe from "@/components/Recipe";
export default {
  name: "RecipeView",
  components: {Recipe},
  props: {
    recipeId: String
  },
  data() {
    return {
      recipe: {},
    }
  },
  methods: {
    ...mapActions({
      getRecipe: 'getRecipe',
    }),
  },

  async mounted() {
    console.log(this.$route.params.id)
    this.getRecipe(this.$route.params.id).then(
        response => {
          this.recipe = response
        }
    );
    console.log(this.recipe)
  },
};
</script>

<style scoped>

</style>