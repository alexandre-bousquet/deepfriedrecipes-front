<template>
    <Recipes v-if="$store.getters.getUser != null"
             :recipeList="recipes"
    />
    <b-card v-else class="centerT customCard">
      <h1>Bienvenue sur Deep Fried Recipes</h1>
      <h4>Vous devez être connecté pour accéder aux recettes !</h4>
    </b-card>
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
    if (this.$store.getters.getUser != null) {
      await this.$store.dispatch("initRecipes");
    }
  },
};
</script>

<style scoped>
.customCard {
  margin: 50px auto auto auto !important;
  width: 800px;
  padding: 20px;
}
</style>