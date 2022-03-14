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
      this.recipe = this.$store.getters.getRecipe(this.$route.params.id)
    }
  },
  async mounted() {
    this.updateRecipe()
  },
};
</script>

<style scoped>

</style>