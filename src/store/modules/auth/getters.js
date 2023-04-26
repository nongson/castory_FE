export default {
  getToken(state) {
    return state.token;
  },
  getIsLoggedIn(state) {
    console.log(state.token);
    return Boolean(state.token);
  },
};
