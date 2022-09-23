export const state = () => ({
  signature: "",
  signer: null,
});

export const mutations = {
  SET_SIGNATURE(state, signature) {
    state.signature = signature;

    localStorage.setItem("REPORTER_AUTH_SIGNATURE", signature);
  },

  SET_SIGNER(state, signer) {
    state.signer = signer;
  },
};

export const actions = {
  async setAccountData({ commit }, { signature, signer }) {
    commit("SET_SIGNATURE", signature);
    commit("SET_SIGNER", signer);
  },
};
