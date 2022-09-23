<template>
  <div class="w-1/3">
    <p class="text-2xl mb-4">Reporte ID: {{ reportId }}</p>
    <button
      v-if="showSignButton"
      type="button"
      class="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      @click="fetchReport"
    >
      Firma para ver el reporte
    </button>
    <pre>
      {{ report }}
    </pre>
  </div>
</template>

<script>
export default {
  layout: "app",

  data() {
    return {
      report: null,
      showSignButton: false,
    };
  },

  computed: {
    reportId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.fetchReport();
  },

  methods: {
    async fetchReport() {
      this.showSignButton = false;
      try {
        const signature = await this.$wallet.signMessage(`${this.reportId}`);

        const { data: report } = await this.$axios(`api/reports/${signature}`);

        this.report = report;
      } catch {
        this.showSignButton = true;
      }
    },
  },
};
</script>

<style></style>
