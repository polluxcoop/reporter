import wallet from "~/support/services/wallet";

export default (_, inject) => {
  inject("wallet", wallet);
};
