<template>
    <RecipeListView
        :recipeList="recipes"
    />
</template>

<script>
import RecipeListView from "@/views/RecipeListView";
export default {
  name: "Recipes",
  components: {RecipeListView},
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