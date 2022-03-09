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
        <b-button v-if="user && user.email === recipe.user[0].email" variant="danger" @click="onDelete">Supprimer la recette</b-button>
        <b-button v-if="user && user.email === recipe.user[0].email" variant="warning" v-b-modal.modal-form @click="initModal">Modifier la recette</b-button>

        <b-modal id="modal-form" size="lg" title="Modifier la recette" @ok="onSubmit">
          <UpdateForm :form="recipe" />
        </b-modal>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import UpdateForm from "@/components/Recipe/UpdateForm";
export default {
  name: "Recipe",
  components: {UpdateForm},
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
    },
    initModal() {
      this.form = this.recipe
    },
    onSubmit(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.$bvModal.hide("modal-form")
      })
      this.updateRecipe(this.form)
    }
  }
};
</script>

<style scoped>

</style>