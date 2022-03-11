<template>
  <b-card-group deck>
    <b-card
        :title="recipe.name_recette"
        :img-src="recipe.image_recette ? 'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette : 'https://restbd-alex.tinygoblins.fr/media/6229d288b55385400001c719'"
        :img-alt="recipe.image_recette ? 'https://restbd-alex.tinygoblins.fr/media/' + recipe.image_recette : 'https://restbd-alex.tinygoblins.fr/media/6229d288b55385400001c719'"
        img-top
        class="mb-2 customCard">

      <b-card-text>
        {{ recipe.description_recette }}
        {{ recipe.temps_recette }}
        {{ recipe.ingredients_recette }}
        {{ recipe.etapes_recette }}
        {{ recipe.user[0].email }}
      </b-card-text>

      <div v-if="user && user.email === recipe.user[0].email">
        <b-button variant="warning" v-b-modal.modal-form @click="initModal">Modifier la recette</b-button>
        <b-button variant="danger" v-b-modal.modal-delete>Supprimer la recette</b-button>
      </div>

      <b-modal id="modal-delete" size="sm" title="Supprimer la recette" @ok="onDelete">
        Etes-vous certains de vouloir supprimer cette recette ?
      </b-modal>

      <b-modal id="modal-form" size="lg" title="Modifier la recette" @ok="onSubmit">
        <Form :create="false" :form="form"/>
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
        etapes_recette: this.recipe.etapes_recette,
        temps_recette: this.recipe.temps_recette
      }
    },
    onSubmit(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.$bvModal.hide("modal-form")
      })
      this.updateRecipe(this.form)
      this.$bvToast.toast('Recette modifiée avec succès', {
        toaster: 'b-toaster-top-center',
        variant: 'success',
        autoHideDelay: 2500,
        solid: true,
      })
    }
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
</style>