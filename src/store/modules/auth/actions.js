export default {
  handleSetToken(context, payload) {
    context.commit("handleSetToken", payload);
  },
  handleClearToken(context) {
    context.commit("handleClearToken");
  },
  handleKeepLogin(context) {
    const token = localStorage.getItem("token");
    context.commit("handleKeepLogin", token);
  },
};
