import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import loginScreen from "../views/loginScreen.vue";
import register from "../views/register.vue";

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/loginScreen",
    name: "loginScreen",
    component: loginScreen,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
