<template>
    <Recipe
        v-if="recipe"
        :recipe="recipe"
    />
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