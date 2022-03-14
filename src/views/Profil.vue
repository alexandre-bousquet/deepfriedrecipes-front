<template>
  <div>
    <b-card-group deck>
      <b-card
          :title="'Profil'"
          class="mb-2"
      >
        <b-card-text>
          <div v-if="user.firstname">
            <h5>Prénom</h5>
            {{ user.firstname }}
          </div>
          <div v-if="user.lastname">
            <h5>Nom</h5>
            {{ user.lastname }}
          </div>
          <div v-if="user.email">
            <h5>Email</h5>
            {{ user.email }}
          </div>
        </b-card-text>
        <b-button variant="primary" v-b-modal.modal-form-profil>Modifier votre profil</b-button>
      </b-card>
    </b-card-group>
    <br>
    <div v-if="recipes.length > 0" class="text-center">
      <Recipes
         :recipeList="recipes"
         :profile="true"
      />
      <br>
      <b-button variant="primary" size="lg" v-b-modal.modal-form>Créér une recette</b-button>
    </div>
    <b-card-group v-else class="centerT padBot20">
      <b-card>
        <b-card-text>
          Vous n'avez créé aucune recette
        </b-card-text>
        <b-button variant="primary" size="lg" v-b-modal.modal-form>Créér votre première recette !</b-button>
      </b-card>
    </b-card-group>
    <b-modal id="modal-form" size="lg" title="Créér votre propre recette" @ok="onSubmit" cancel-title="Annuler">
      <Form :profile="false" :create="true" :form="form"/>
    </b-modal>
    <b-modal id="modal-form-profil" size="lg" title="Modifier votre profil" @ok="updateUser" cancel-title="Annuler">
      <Form :profile="true" :form="userForm"/>
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
      },
      user: Object,
      userForm: Object
    };
  },
  methods: {
    ...mapActions({
      getRecipeByUser: 'getRecipeByUser',
      createRecipe: 'createRecipe',
      editUser: 'editUser'
    }),
    onSubmit(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.$bvModal.hide("modal-form")
      })
      this.createRecipe(this.form)
      this.$bvToast.toast('Recette créée avec succès', {
        toaster: 'b-toaster-top-center',
        variant: 'success',
        autoHideDelay: 1500,
        solid: true,
      })
    },
    updateUser(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.$bvModal.hide("modal-form-profil")
      })
      this.editUser(this.userForm)
      this.$bvToast.toast('Profil modifié avec succès', {
        toaster: 'b-toaster-top-center',
        variant: 'success',
        autoHideDelay: 1500,
        solid: true,
      })
    }
  },
  mounted() {
    this.user = this.$store.state.user
    this.userForm = {
      _id: this.user._id,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email
    }
    this.getRecipeByUser(this.$store.state.user.email)
        .then(response => {
          this.recipes = response
        })
  }
}
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

</style>