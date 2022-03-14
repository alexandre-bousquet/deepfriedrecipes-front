<template>
  <div v-if="profile === true">
    <ProfileForm :form="form"/>
  </div>
  <div v-else>
    <CreateForm v-if="create === true" :form="form"/>
    <UpdateForm v-else :form="form"/>
  </div>
</template>

<script>
import UpdateForm from "@/components/Recipe/UpdateForm";
import CreateForm from "@/components/Recipe/CreateForm";
import ProfileForm from "@/components/ProfileForm";
export default {
  name: "Form",
  props: {
    profile: Boolean,
    create: Boolean,
    form: Object
  },
  components: {CreateForm, UpdateForm, ProfileForm}
}
</script>

<style scoped>

</style>