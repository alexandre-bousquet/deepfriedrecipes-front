<template>
  <div>
    <h2 class="centerT">Recette</h2>
    <br />
    <b-card-group deck>
      <b-card
          :title="recipe.name_recette"
          :img-src="'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette"
          :img-alt="'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette"
          img-top
          class="mb-2">

        <b-card-text>
          {{ recipe.description_recette }}
          {{ recipe.temps_recette }}
          {{ recipe.ingredients_recette }}
          {{ recipe.etapes_recette }}
          {{ recipe.user[0].email }}
        </b-card-text>
        <b-button v-if="userConnected && userConnected.email === recipe.user[0].email" variant="danger" @click="onClick">Supprimer la recette</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "Recipe",
  data() {
    return {
      userConnected: this.$store.state.userConnected,
      userToken: this.$store.state.userToken
    }
  },
  props: {
    recipe: Object
  },
  methods: {
    ...mapActions({
      deleteRecipe: 'deleteRecipe',
    }),
    async onClick(event) {
      event.preventDefault();
      await this.deleteRecipe(this.recipe._id)
      await this.$router.push("/")
    },
  }
};
</script>

<style scoped>

</style>