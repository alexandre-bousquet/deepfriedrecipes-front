import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import Recipe from "@/components/Recipe/Recipe";
/*import { getSkills } from "@/helpers/apiHelper";
import { getRecipes } from "@/helpers/apiHelper";*/

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        skills: [],
        recipes: [],
        user: null
    },
    getters: {
        getRecipes : (state) => {
            return state.recipes;
        },
        getRecipe : (state) => (recipeId) => {
            //console.log(state.recipes);
            return state.recipes.find(recipe => recipe._id === recipeId);
            //return axios.get("https://deepfriedrecipes.herokuapp.com/recipes/get" + recipeId);
        },
        getUser: (state) => {
            if (state.user !== null) {
                return state.user;
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
        destroyUser(state) {
            state.user = null;
        },
        setUser(state, user) {
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        }
    },
    actions: {
        initRecipes({commit}) {
            axios
                .get("https://deepfriedrecipes.herokuapp.com/recipes/get", {
                    headers: {
                        'Authorization': 'Bearer ' + this.getters.getUser.jwt,
                        'Content-Type': 'application/json'
                    }
                })
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
                .get("https://deepfriedrecipes.herokuapp.com/recipes/get/" + id, {
                    headers: {
                        'Authorization': 'Bearer ' + context.getters.getUser.jwt,
                        'Content-Type': 'application/json'
                    }
                })
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
                    'Authorization': 'Bearer ' + context.getters.getUser.jwt,
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
        async updateRecipe(context, form) {
            await axios.post("https://deepfriedrecipes.herokuapp.com/recipes/put/" + form._id, form, {
                headers: {
                    'Authorization': 'Bearer ' + context.getters.getUser.jwt,
                    'Content-Type': 'application/json'
                }
            }).then(result => {
                return result.data
            }).catch(error => {
                return error
            })
        },
        async createRecipe(context, form) {
            await axios.post("https://deepfriedrecipes.herokuapp.com/recipes/post", form, {
                headers: {
                    'Authorization': 'Bearer ' + context.getters.getUser.jwt,
                    'Content-Type': 'application/json'
                }
            }).then(result => {
                return result.data
            }).catch(error => {
                return error
            })
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
                    context.commit("setUser", response.data.user);
                });
                return 200;
            } catch(error) {
                console.log(error)
                return 401;
            }

        },
        async editUser(context, form) {
            try {
                await axios.post("https://deepfriedrecipes.herokuapp.com/my-users/put/" + form._id, form, {
                    headers: {
                        'Authorization': 'Bearer ' + context.getters.getUser.jwt,
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                    context.commit("setUser", response.data.user);
                });
                return 200;
            } catch(error) {
                console.log(error)
                return 401;
            }
        },
        initUser(context) {
            const user = JSON.parse(window.localStorage.getItem("user"));
            if (user != null) {
                context.commit("setUser", user)
            }
        },
        logout(context) {
            window.localStorage.clear();
            context.commit("destroyUser");
        }
    }
});
