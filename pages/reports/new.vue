<template>
  <div class="w-1/3">
    <div class="flex items-center justify-between">
      <div class="my-8">
        <h1 class="text-2xl text-bold">Nuevo reporte</h1>
      </div>

      <nuxt-link
        class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        to="/"
      >
        Volver
      </nuxt-link>
    </div>
    <report-form @submit="handleSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ReportForm from "~/components/Report/Form";

export default {
  components: {
    ReportForm,
  },

  layout: "app",

  computed: {
    ...mapState("auth", ["signature"]),
  },

  methods: {
    async handleSubmit(payload) {
      const nonce = Number(this.$route.query.nonce) + 1;
      const reportSignature = await this.$wallet.signMessage(`${nonce}`);

      this.$axios.post("api/reports", {
        ...payload,
        reportSignature,
        nonceSignature: this.signature,
      });
    },
  },
};
</script>

<style></style>
