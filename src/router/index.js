import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "@/views/auth/LoginView.vue";
import AdminLoginView from "@/views/auth/AdminLoginView.vue";
import ListView from "@/views/list/ListView.vue";
import BrowseView from "@/views/browse/BrowseView.vue";
import CardQuestionView from "@/views/card/CardQuestionView.vue";
import CardAnswerView from "@/views/card/CardAnswerView.vue";
import BrowseCardSetView from "@/views/browse/BrowseCardSetView.vue";
import BrowseCardSetDetailView from "@/views/browse/BrowseCardSetDetailView.vue";
import TabsView from "@/views/admin/TabsView.vue";
import StudentDetails from "@/views/admin/manage-student/StudentDetails.vue";
import BrowseAdminView from "@/views/admin/manage-student/BrowseAdminView.vue";

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
    meta: { needLogin: false },
  },
  {
    path: "/admin",
    name: "loginAdmin",
    component: AdminLoginView,
    meta: { needLogin: false },
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
    meta: { needLogin: false },
  },
  {
    path: "/list/:id",
    name: "cardDetailsQuestion",
    props: true,
    component: CardQuestionView,
    meta: { needLogin: false },
  },
  {
    path: "/answer/:id",
    name: "cardDetailsAnswer",
    props: true,
    component: CardAnswerView,
    meta: { needLogin: false },
  },
  {
    path: "/browse",
    name: "browse",
    component: BrowseView,
    meta: { needLogin: false },
  },
  {
    path: "/browse/:id",
    name: "browseCardSet",
    component: BrowseCardSetView,
    meta: { needLogin: false, onlyMobile: true },
  },
  {
    path: "/browse/card/:id",
    name: "browseCardSetDetails",
    component: BrowseCardSetDetailView,
    meta: { needLogin: false, onlyMobile: true },
  },
  //   ---------------admin----------------
  {
    path: "/manage",
    name: "manage",
    component: TabsView,
    meta: { needLogin: false },
  },
  {
    path: "/student/:id",
    name: "student",
    component: StudentDetails,
    meta: { needLogin: false },
  },
  {
    path: "/browse-admin/student/:id",
    name: "browse-admin",
    component: BrowseAdminView,
    meta: { needLogin: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// ---------------- guard router using token in localStorage ---------------- /
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !!localStorage.getItem("access_token") === false) {
    next("/login");
  } else if (!to.meta.needLogin && !!localStorage.getItem("access_token")) {
    next("/list");
  } else if (
    to.meta.onlyMobile &&
    JSON.parse(localStorage.getItem("mobileScreen")) === false
  ) {
    next("/browse");
  } else {
    next();
  }
});

export default router;
