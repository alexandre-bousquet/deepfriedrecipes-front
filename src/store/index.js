import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/*import { getSkills } from "@/helpers/apiHelper";
import { getRecipes } from "@/helpers/apiHelper";*/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [],
    recipes: [],
    userToken: null
  },
  getters: {
    getUserToken({ state }) {
      if (state.userToken !== null) {
        return state.userToken;
      }
    }
  },
  mutations: {
    updateSkills(state, skills) {
      state.skills = skills;
    },
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    },
    updateUserToken(state, userToken) {
      state.userToken = userToken;
    }
  },
  actions: {
    initRecipes({ commit }) {
      axios
        .get("https://deepfriedrecipes.herokuapp.com/recipes/get")
        .then((response) => {
          console.log(response.data);
          commit("updateRecipes", response.data);
        })
        .catch((error) => {
          console.log({ error });
          console.log("Server not up");
        });
    },
    initUserToken(context) {
      if (localStorage.getItem("userToken") !== null) {
        context.commit("updateUserToken", localStorage.getItem("userToken"));
      }
    },
    setUserTokenLogin(context, userToken) {
      context.commit("updateUserToken", userToken);
    }
  }
});
