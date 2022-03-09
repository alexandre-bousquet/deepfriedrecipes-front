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
        <b-button v-if="user && user.email === recipe.user[0].email" variant="warning" v-b-modal.modal-form>Modifier la recette</b-button>

        <b-modal id="modal-form" size="lg" title="Modifier la recette" @submit="onSubmit">
          <b-form>
            <b-form-group id="input-group-name" label="Nom de la recette" label-for="input-name">
              <b-form-input
                  id="input-name"
                  v-model="form.name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-description" label="Description de la recette" label-for="input-description">
              <b-form-input
                  id="input-description"
                  v-model="form.description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-user" label="Créateur de la recette" label-for="input-user">
              <b-form-input
                  id="input-user"
                  v-model="recipe.user[0].email"
                  plaintext
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-modal>
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
      user: this.$store.state.user,
      form: {
        name: this.recipe.name_recette,
        description: this.recipe.description_recette,
        temps: this.recipe.temps_recette,
        ingredients: this.recipe.ingredients_recette,
        etapes: this.recipe.etapes_recette
      }
    }
  },
  props: {
    recipe: Object
  },
  methods: {
    ...mapActions({
      deleteRecipe: 'deleteRecipe',
    }),
    async onDelete(event) {
      event.preventDefault();
      await this.deleteRecipe(this.recipe._id)
      await this.$router.push("/")
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
};
</script>

<style scoped>

</style>