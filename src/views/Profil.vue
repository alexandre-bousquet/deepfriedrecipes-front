<template>
  <div>
    <div v-if="recipes.length > 0">
      <b-button variant="primary" v-b-modal.modal-form>Créér une recette</b-button>
      <Recipes
         :recipeList="recipes"
      />
    </div>
    <b-card-group v-else class="centerT padBot20">
      <b-card>
        <b-card-text>
          Vous n'avez créé aucune recette
        </b-card-text>
        <b-button variant="primary" v-b-modal.modal-form>Créér votre première recette !</b-button>
      </b-card>
    </b-card-group>
    <b-modal id="modal-form" size="lg" title="Créér votre propre recette" @ok="onSubmit">
      <Form :create="true" :form="form"/>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Recipes from "@/components/Recipe/Recipes";
import Form from "@/components/Recipe/Form";

export default {
  name: "Profil",
  components: {Recipes, Form},
  data() {
    return {
      recipes: Array,
      form: {
        name_recette: undefined,
        description_recette: undefined,
        ingredients_recette: undefined,
        etapes_recette: undefined,
        temps_recette: undefined
      }
    };
  },
  methods: {
    ...mapActions({
      getRecipeByUser: 'getRecipeByUser',
      createRecipe: 'createRecipe'
    }),
    onSubmit(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.$bvModal.hide("modal-form")
      })
      this.createRecipe(this.form)
    }
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