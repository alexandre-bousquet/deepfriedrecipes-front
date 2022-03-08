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
        userToken: null,
        userConnected: null
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
        },
        getUserConnected: (state) => {
            if (state.userConnected !== null) {
                return state.userConnected;
            }
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
        setUserToken(state, userToken) {
            state.userToken = userToken;
            localStorage.setItem("userToken", userToken);
        },
        destroyUser(state) {
            state.userToken = null;
        },
        setUserConnected(state, userConnected) {
            state.userConnected = userConnected;
            localStorage.setItem("userConnected", JSON.stringify(userConnected));
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
        async getRecipe(context, id) {
            const response = await axios
                .get("https://deepfriedrecipes.herokuapp.com/recipes/get/" + id)
                .catch((error) => {
                    console.log({error});
                });
            console.log(response.data)
            return response.data
        },
        getRecipeByUser(context, email) {
            return this.state.recipes.filter(recipe => recipe.user[0].email === email)
        },
        async deleteRecipe(context, id) {
            await axios.get("https://deepfriedrecipes.herokuapp.com/recipes/delete/" + id, {
                headers: {
                    'Authorization': 'Bearer ' + context.getters.getUserToken,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log({response});
            })
            .catch((error) => {
                console.log({error});
            });
        },
        async register(context, form) {
            try {
                await axios.post("https://deepfriedrecipes.herokuapp.com/my-users/post", {
                    firstname: form.firstname,
                    lastname: form.lastname,
                    email: form.email,
                    password: form.password
                })
                return 200
            } catch(error) {
                return 401
            }
        },
        async login(context, form) {
            try {
                await axios.post("https://deepfriedrecipes.herokuapp.com/login", {
                    email: form.email,
                    password: form.password
                }).then((response) => {
                    console.log(response.data);
                    context.commit("setUserToken", response.data.jwt);
                    context.commit("setUserConnected", response.data.user);
                });
                return 200;
            } catch(error) {
                console.log(error)
                return 401;
            }

        },
        initUser(context) {
            const userToken = window.localStorage.getItem("userToken");
            const user = JSON.parse(window.localStorage.getItem("userConnected"));
            if (userToken != null) {
                context.commit("setUserToken", userToken);
            }
            if (user != null) {
                context.commit("setUserConnected", user)
            }
        },
        logout(context) {
            window.localStorage.clear();
            context.commit("destroyUser");
        }
    }
});
