<template>
  <b-card-group deck>
    <b-card
        :title="recipe.temps_recette ? recipe.name_recette + ' (' + recipe.temps_recette + ')' : recipe.name_recette"
        :img-src="recipe.image_recette ? 'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette : 'https://restbd-alex.tinygoblins.fr/media/6229d288b55385400001c719'"
        :img-alt="recipe.image_recette ? 'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette : 'https://restbd-alex.tinygoblins.fr/media/6229d288b55385400001c719'"
        img-top
        class="mb-2 customCard">

      <b-card-text>
        <div v-if="recipe.user">
          Recette proposée par {{ recipe.user[0].firstname + " " + recipe.user[0].lastname}}
        </div>
        <div v-if="recipe.description_recette">
          <h5>Description</h5>
          {{ recipe.description_recette }}
        </div>
        <div v-if="recipe.ingredients_recette">
          <h5>Ingrédients</h5>
          <div class="list">
            {{ recipe.ingredients_recette }}
          </div>
        </div>
        <div v-if="recipe.etapes_recettes">
          <h5>Etapes</h5>
          <div class="list">
            {{ recipe.etapes_recettes }}
          </div>
        </div>
      </b-card-text>

      <div v-if="user && recipe.user && user.email === recipe.user[0].email">
        <b-button variant="warning" v-b-modal.modal-form @click="initModal" class="customNavLinkMarRight">Modifier la recette</b-button>
        <b-button variant="danger" v-b-modal.modal-delete>Supprimer la recette</b-button>
      </div>

      <b-modal id="modal-delete" size="sm" title="Supprimer la recette" @ok="onDelete" cancel-title="Annuler">
        Etes-vous certains de vouloir supprimer cette recette ?
      </b-modal>

      <b-modal id="modal-form" size="lg" title="Modifier la recette" @ok="onSubmit" cancel-title="Annuler">
        <Form :profile="false" :create="false" :form="form"/>
      </b-modal>
    </b-card>
  </b-card-group>
</template>

<script>
import {mapActions} from "vuex";
import Form from "@/components/Recipe/Form";
export default {
  name: "Recipe",
  components: {Form},
  data() {
    return {
      user: this.$store.state.user,
      form: Object
    }
  },
  props: {
    recipe: Object
  },
  methods: {
    ...mapActions({
      deleteRecipe: 'deleteRecipe',
      updateRecipe: 'updateRecipe'
    }),
    async onDelete(event) {
      event.preventDefault();
      await this.deleteRecipe(this.recipe._id)
      await this.$store.dispatch("initRecipesBD")
      await this.$router.push("/")
      this.$bvToast.toast('Recette supprimée avec succès', {
        toaster: 'b-toaster-top-center',
        variant: 'success',
        autoHideDelay: 2500,
        solid: true,
      })
    },
    initModal() {
      this.form = {
        _id: this.recipe._id,
        name_recette: this.recipe.name_recette,
        description_recette: this.recipe.description_recette,
        ingredients_recette: this.recipe.ingredients_recette,
        etapes_recettes: this.recipe.etapes_recettes,
        temps_recette: this.recipe.temps_recette
      }
    },
    async onSubmit(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.$bvModal.hide("modal-form")
      })
      await this.updateRecipe(this.form)
      await this.$store.dispatch("initRecipesBD")
      await this.$emit('updated')
      this.$bvToast.toast('Recette modifiée avec succès', {
        toaster: 'b-toaster-top-center',
        variant: 'success',
        autoHideDelay: 2500,
        solid: true,
      })
    }
  },
  mounted() {
    this.$emit('reload')
  }
};
</script>

<style scoped>
.customCard {
  margin: 50px auto auto auto !important;
  width: 800px !important;
  padding: 20px;
  flex: inherit !important;
}

.card-text div {
  padding-bottom: 20px;
}

.card-text .list {
  white-space: pre-line;
}
</style>