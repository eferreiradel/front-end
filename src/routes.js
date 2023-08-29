import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/layouts/AppHome.vue";
import AdvancedSearch from "./components/layouts/AdvancedSearch.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", name: "home", component: AppHome },
      { path: "/search", name: "search", component: AdvancedSearch },
  ],
});  

export {router};
