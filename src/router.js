import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue";
import ErrorPage from "./pages/ErrorPage.vue"
import ShowTeacher from "./pages/ShowTeacher.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", name: "home", component: AppHome },
      { path: "/search/:term?", name: "search", component: AdvancedSearch },
      { path: "/error/:code", name: "error", component: ErrorPage },
      { path: "/teacher/:userId", name: "showTeacher", component: ShowTeacher }
  ],
});  

export {router};
