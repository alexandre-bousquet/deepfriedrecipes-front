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