<template>
  <div>
    <Recipes v-if="recipes.length > 0"
        :recipeList="recipes"
    />
    <b-card-group v-else class="centerT padBot20">
      <b-card>Vous n'avez créé aucune recette</b-card>
    </b-card-group>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Recipes from "@/components/Recipe/Recipes";

export default {
  name: "Profil",
  components: {Recipes},
  data() {
    return {
      recipes: Array,
    };
  },
  methods: {
    ...mapActions({
      getRecipeByUser: 'getRecipeByUser',
    }),
  },
  mounted() {
    this.getRecipeByUser(this.$store.state.user.email)
        .then(response => {
          this.recipes = response
        })
  }
}
</script>

<style scoped>

</style>