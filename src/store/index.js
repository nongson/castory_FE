import Vue from "vue";
import Vuex from "vuex";
import list from "@/store/modules/list";
import card from "@/store/modules/card";
import auth from "@/store/modules/auth";
import browse from "@/store/modules/browse";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    list: list,
    card: card,
    auth: auth,
    browse: browse,
  },
});
