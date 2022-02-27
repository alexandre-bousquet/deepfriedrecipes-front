<template>
  <div>
    <table>
      <tr v-for="skill in skills" :key="skill.name">
        <td>{{ skill.name }}</td>
        <td>{{ skill.percent }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MySkills",
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  async mounted() {
    this.$store.dispatch("initSkills");
  },
};
</script>