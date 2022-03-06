import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import SecondPage from "../views/SecondPage";
import Login from "../views/Login";
import RecipeView from "@/views/RecipeView";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/second",
      name: "secondPage",
      component: SecondPage
    },
    {
      path: "/login",
      name: "loginPage",
      component: Login
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: RecipeView
    }
  ]
});

/*router.beforeEach((to, from, next) => {
  if (to.name !== "loginPage") next({ name: "loginPage" });
  else next();
});*/

export default router;
