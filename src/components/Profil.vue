<template>
  <div class="marAuto">
    <h2 class="centerT padBot20">Toutes vos recettes</h2>
    <b-card-group deck v-if="recipes.length > 0">
      <b-card
          v-for="recipe in recipes"
          :key="recipe._id"
          :title="recipe.name_recette + ' (' + recipe.temps_recette + ')'"
          :img-src="
            'https://restbd-alex.tinygoblins.fr/media/' +
            recipe.image_recette[0]
          "
          :img-alt="recipe.image_recette[0]"
          img-top
          class="mb-2"
      >
        <b-card-text>
          {{ recipe.description_recette }}
        </b-card-text>

        <RouterLink :to="'recipe/' + recipe._id" class="custom-button">Voir la recette</RouterLink>
      </b-card>
    </b-card-group>
    <b-card-group v-else class="centerT padBot20">
      <b-card>Vous n'avez créé aucune recette</b-card>
    </b-card-group>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Profil",
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    ...mapActions({
      getRecipeByUser: 'getRecipeByUser',
    }),
  },
  mounted() {
    this.getRecipeByUser(this.$store.state.userConnected.email)
        .then(response => {
          this.recipes = response
        })
  }
}
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