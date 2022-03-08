<template>
    <Recipes
        :recipeList="recipes"
    />
</template>

<script>
import Recipes from "@/components/Recipe/Recipes";
export default {
  name: "RecipesListView",
  components: {Recipes},
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

</style>