<template>
  <div class="flex flex-col gap-4">
    <report-search @search="handleSearch" />

    <nuxt-link
      class="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      to="/new"
    >
      Nuevo
    </nuxt-link>
  </div>
</template>

<script>
import ReportSearch from "~/components/Report/Search";

export default {
  name: "IndexPage",

  components: {
    ReportSearch,
  },

  methods: {
    handleSearch(publicKey) {
      console.log("handleSearch > not implemented", publicKey);

      this.$router.push({ path: "reports", query: { publicKey } });
    },
  },
};
</script>
