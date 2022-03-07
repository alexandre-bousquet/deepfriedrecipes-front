<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}

#container {
  justify-content: space-between;
}

.centerT {
  text-align: center !important;
}

.leftT {
  text-align: left !important;
}

.custom-button {
  padding: 10px;
  color: black;
  background-color: white;
  text-decoration: none !important;
  border: 1px solid black;
  border-radius: calc(0.25rem - 1px);
}

.custom-button:hover {
  transition: .5s;
  color: white;
  background-color: black;
  box-shadow: 0 0 20px -10px #000000;
}
</style>
