import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", name: "home", component: AppHome },
      { path: "/search", name: "search", component: AdvancedSearch },
  ],
});  

export {router};
