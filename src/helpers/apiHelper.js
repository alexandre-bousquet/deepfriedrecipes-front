import axios from "axios";

export const getRecipes = () => {
  return axios.get("https://deepfriedrecipes.herokuapp.com/recipes/get");
};

/*
export const getRecipe = (recipeId) => {
  return axios.get("https://deepfriedrecipes.herokuapp.com/recipes/get" + recipeId);
};
*/