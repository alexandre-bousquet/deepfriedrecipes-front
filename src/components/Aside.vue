<template>
  <div class="aside-container">
    <input type="text" v-model="email" />
    <textarea v-model="body"> </textarea>

    <button type="button" @click="submitForm">Envoyer</button>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data: () => ({
    email: "",
    body: "",
  }),
  methods: {
    submitForm() {
      console.log(this.email, this.body);
    },
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  display: flex;
  flex-direction: column;
}
</style>