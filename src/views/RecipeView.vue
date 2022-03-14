<template>
    <Recipe
        v-if="recipe"
        :recipe="recipe"
        @reload="updateRecipe"
        @updated="updateRecipe"
    />
</template>

<script>
import Recipe from "@/components/Recipe/Recipe";

export default {
  name: "RecipeView",
  components: {Recipe},
  data() {
    return {
      recipe: undefined
    }
  },
  methods: {
    updateRecipe() {
      const recette = this.$store.getters.getRecipe(this.$route.params.id)
      console.log({recette})
      this.recipe = recette
    }
  },
  async mounted() {
    this.updateRecipe()
  },
};
</script>

<style scoped>

</style>