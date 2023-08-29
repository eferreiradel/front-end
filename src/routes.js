import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


const routes = [
    // Define your routes here
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: AppHome },
        { path: "/projects", name: "projects", component: AppProjects },
        { path: "/contact-me", name: "contact-me", component: AppContact },
        { path: "/contact-me/thank-you", name: "message", component: AppMessage },
    ],
});  

export default router;
