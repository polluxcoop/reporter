export default ({ store }) => {
  const signature = localStorage.getItem("REPORTER_AUTH_SIGNATURE");

  if (signature) {
    store.commit("auth/SET_ACCOUNT", signature);
  }
};
