<template>
  <nav>
    <b-navbar toggleable="lg">
      <b-navbar-brand><router-link to="/">Deep Fried Recipes</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--<b-nav-item href="#"></b-nav-item>-->

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="$store.getters.getUser == null">
            <b-button class="customNavLinkMarRight"><router-link to="/profil"><router-link to="/login">Login</router-link></router-link></b-button>
            <b-button variant="primary" href=""><router-link to="/register">Register</router-link></b-button>
          </div>

          <div v-else>
            <b-button class="customNavLinkMarRight"><router-link to="/profil">{{ $store.getters.getUser.firstname }} {{ $store.getters.getUser.lastname }}</router-link></b-button>
            <b-button @click="$route.name !== 'home' ? $store.dispatch('logout') && $router.push('/') : $store.dispatch('logout')">Déconnexion</b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

nav {
  background-color: white;
  border-bottom: 1px solid #0069d9;
  box-shadow: 0 0 20px -10px #000000;
}

/*nav a, nav button {
  text-decoration: none;
  color: black;
}

nav button {
  background-color: lightgrey;
  border: 1px solid orange;
}

nav button a:hover {
  color: white !important;
}*/
</style>