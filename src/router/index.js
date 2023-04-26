import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import CardView from "@/views/card/CardView.vue";
import ListView from "@/views/list/ListView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/list",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
    meta: { needLogin: true },
  },
  {
    path: "/list/:id",
    name: "cardDetails",
    props: true,
    component: CardView,
    meta: { needLogin: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !store.getters["auth/getIsLoggedIn"]) {
    next("/login");
  } else {
    next();
  }
});

export default router;
