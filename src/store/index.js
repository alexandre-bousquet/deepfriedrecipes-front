import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import Recipe from "@/components/Recipe";
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
        getUserToken: (state) => {
            if (state.userToken !== null) {
                return state.userToken;
            }
        },
        getRecipes : (state) => {
            return state.recipes;
        },
        getRecipe : (state) => (recipeId) => {
            //console.log(state.recipes);
            return state.recipes.find(recipe => recipe._id === recipeId);
            //return axios.get("https://deepfriedrecipes.herokuapp.com/recipes/get" + recipeId);
        }
    },
    mutations: {
        updateSkills(state, skills) {
            state.skills = skills;
        },
        updateRecipes(state, recipes) {
            state.recipes = recipes;
            for (let i = 0; i < recipes.length; i++) {
                console.log({ path: '/recipe/' + recipes[i]._id, component: Recipe, props: { recipeId: recipes[i]._id }})
                router.addRoute({ path: '/recipe/' + recipes[i]._id, component: Recipe, props: { recipeId: recipes[i]._id }})
            }
        },
        updateUserToken(state, userToken) {
            state.userToken = userToken;
        }
    },
    actions: {
        initRecipes({commit}) {
            axios
                .get("https://deepfriedrecipes.herokuapp.com/recipes/get")
                .then((response) => {
                    console.log(response.data);
                    commit("updateRecipes", response.data);
                })
                .catch((error) => {
                    console.log({error});
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
        },
        async getRecipe(context, id) {
            const response = await axios
                .get("https://deepfriedrecipes.herokuapp.com/recipes/get/" + id)
                .catch((error) => {
                    console.log({error});
                    console.log("Server not up");
                });
            console.log(response.data)
            return response.data
        }
    }
});
