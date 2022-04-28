import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
    meta: { layout: null },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
