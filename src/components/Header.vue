<template>
  <nav>
    <b-navbar toggleable="lg">
      <b-navbar-brand><router-link to="/">Deep Fried Recipes</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="$store.getters.getUser == null">
            <b-button variant="primary" class="customNavLinkMarRight" @click="$router.push('/login').catch(() => {})">Se connecter</b-button>
            <b-button variant="primary" @click="$router.push('/register').catch(() => {})">S'inscrire</b-button>
          </div>

          <div v-else>
            <b-button variant="primary" class="customNavLinkMarRight" @click="$router.push('/profil').catch(() => {})">{{ $store.getters.getUser.firstname }} {{ $store.getters.getUser.lastname }}</b-button>
            <b-button variant="danger" @click="$route.name !== 'home' ? $store.dispatch('logout') && $router.push('/').catch(() => {}) : $store.dispatch('logout')">Déconnexion</b-button>
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

a {
  text-decoration: none !important;
  color: black;
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