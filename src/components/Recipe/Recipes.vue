<template>
  <div class="marAuto">
    <h2 class="centerT padBot20">Toutes les recettes</h2>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
    />
    <br>
    <b-card-group deck v-if="recipeList.length > 0">
      <b-card
          v-for="(recipe, index) in recipeList"
          v-show="index + 1 <= perPage * currentPage && index + 1 > perPage * (currentPage - 1)"
          :key="recipe._id"
          :title="recipe.temps_recette ? recipe.name_recette + ' (' + recipe.temps_recette + ')' : recipe.name_recette"
          :img-src="recipe.image_recette ? 'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette[0] : 'https://restbd-alex.tinygoblins.fr/media/6229d288b55385400001c719'"
          :img-alt="recipe.image_recette ? 'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette[0] : 'https://restbd-alex.tinygoblins.fr/media/6229d288b55385400001c719'"
          img-top
          class="mb-2"
      >
        <b-card-text>
          {{ recipe.description_recette }}
        </b-card-text>

        <RouterLink :to="'recipe/' + recipe._id" class="custom-button">Voir la recette</RouterLink>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  props: {
    recipeList: [],
  },
  data() {
    return {
      perPage: 4,
      currentPage: 1
    }
  },
  computed: {
    rows() {
      return this.recipeList.length
    }
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