<template>
    <Recipe
        v-if="recipe"
        :recipe="recipe"
        @updated="updateRecipe"
    />
</template>

<script>
import {mapActions} from "vuex";
import Recipe from "@/components/Recipe/Recipe";
export default {
  name: "RecipeView",
  components: {Recipe},
  data() {
    return {
      recipe: {},
    }
  },
  methods: {
    ...mapActions({
      getRecipe: 'getRecipe',
    }),
    updateRecipe() {
      this.getRecipe(this.$route.params.id).then(
          response => {
            this.recipe = response
          }
      );
    }
  },
  async mounted() {
    this.updateRecipe()
  },
};
</script>

<style scoped>

</style>