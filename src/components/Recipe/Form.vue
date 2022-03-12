<template>
    <CreateForm v-if="create === true" :form="form"/>
    <UpdateForm v-else :form="form"/>
</template>

<script>
import UpdateForm from "@/components/Recipe/UpdateForm";
import CreateForm from "@/components/Recipe/CreateForm";
export default {
  name: "Form",
  props: {
    create: Boolean,
    form: Object
  },
  components: {CreateForm, UpdateForm}
}
</script>

<style scoped>

</style>