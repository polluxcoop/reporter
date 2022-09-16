<template>
  <div class="flex flex-col gap-4 bg-indigo-700 rounded-[20px]">
    <div v-if="!isConnected" class="mx-auto max-w-2xl text-center py-20 px-8">
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

    <template v-else>
      <report-search @search="handleSearch" />

      <nuxt-link
        class="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        to="/new"
      >
        Nuevo
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import ReportSearch from "~/components/Report/Search";

export default {
  name: "IndexPage",

  components: {
    ReportSearch,
  },

  data() {
    return {
      showConnectButton: true,
      isConnected: false,
    };
  },

  methods: {
    handleConnection() {
      this.$router.push({
        path: "reports",
        query: { publicKey: "logged-metamask-key" },
      });
    },

    handleSearch(publicKey) {
      console.log("handleSearch > not implemented", publicKey);

      this.$router.push({ path: "reports", query: { publicKey } });
    },
  },
};
</script>
