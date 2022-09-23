import { ethers } from "ethers";

export const getSigner = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  await provider.send("eth_requestAccounts", []);

  return provider.getSigner();
};

export const signMessage = async (message) => {
  const signer = await getSigner();

  return await signer.signMessage(message);
};

export default {
  getSigner,
  signMessage,
};
