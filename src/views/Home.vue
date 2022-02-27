<template>
  <div id="container">
    <Content />
  </div>
</template>

<script>
import Content from "../components/Content";

export default {
  name: "Home",
  components: {
    Content,
  },
};
</script>

<style scoped>
#container {
  padding: 30px;
}
</style>