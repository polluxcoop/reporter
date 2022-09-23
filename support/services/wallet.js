import { ethers } from "ethers";

export const getSigner = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  await provider.send("eth_requestAccounts", []);

  return provider.getSigner();
};

export default {
  getSigner,
};
