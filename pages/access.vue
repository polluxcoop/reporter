<template>
  <div class="flex flex-col gap-4 bg-indigo-700 rounded-[20px]">
    <div class="mx-auto max-w-2xl text-center py-20 px-8">
      <h1 class="font-bold tracking-tight text-white text-3xl">
        Reportá lo que encuentres medio manco.
      </h1>

      <h2 class="font-bold tracking-tight text-white text-2xl">
        Pero primero ingresá con MetaMask.
      </h2>

      <button
        v-if="showConnectButton"
        @click="handleConnection"
        class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
      >
        Conectar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ethers } from "ethers";
import ReportSearch from "~/components/Report/Search";

export default {
  name: "IndexPage",

  components: {
    ReportSearch,
  },

  data() {
    return {
      showConnectButton: true,
    };
  },

  methods: {
    ...mapActions("auth", ["setAccount"]),

    async handleConnection() {
      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const signature = await signer.signMessage("sign-msg-test");

        this.setAccount(signature);

        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
