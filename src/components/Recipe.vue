<template>
  <div>
    <h2 class="centerT">Recette</h2>
    <br />
    <b-card-group deck>
      <b-card
          :title="title"
          :img-src="'https://restbd-alex.tinygoblins.fr/media/' + picture"
          :img-alt="'https://restbd-alex.tinygoblins.fr/media/' + picture"
          img-top
          class="mb-2">

        <b-card-text>
          {{ description }}
          {{ time }}
          {{ ingredients }}
          {{ stapes }}
          {{ userEmail }}
        </b-card-text>

      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    picture: String,
    title: String,
    description: String,
    time: String,
    ingredients: String,
    stapes: String,
    userEmail: String
  }
};
</script>

<style scoped>

</style>