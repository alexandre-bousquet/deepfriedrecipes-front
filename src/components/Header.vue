<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">DeepFriedRecipes</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--<b-nav-item href="#"></b-nav-item>-->
          <router-link to="/">Home</router-link>
          <div v-if="$store.getters.getUserToken == null">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
          </div>
          <div v-else>
            <router-link to="/profil">Profil</router-link>
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