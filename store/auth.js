export const state = () => ({
  account: "",
});

export const mutations = {
  SET_ACCOUNT(state, account) {
    state.account = account;

    localStorage.setItem("REPORTER_AUTH_SIGNATURE", account);
  },
};

export const actions = {
  async setAccount({ commit }, account) {
    commit("SET_ACCOUNT", account);
  },
};
