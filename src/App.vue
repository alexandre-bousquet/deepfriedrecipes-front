<template>
  <div id="app">
    <Header />
    <div id="container">
      <router-view />
    </div>
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

body, #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex !important;
  min-height: 100vh !important;
  flex-direction: column !important;
}

#container {
  justify-content: space-between;
  padding: 30px;
  flex: 1 0 auto !important;
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

.card{
  border: 2px solid #0069d9 !important;
  box-shadow: 0 0 20px -10px #000000;
}

.customNavLinkMarRight {
  margin-right: 20px;
}

.customNavLinkPadRight {
  padding-right: 20px;
}
</style>
