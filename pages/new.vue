<template>
  <div class="w-1/3">
    <report-form @submit="handleSubmit" />
  </div>
</template>

<script>
import ReportForm from "~/components/Report/Form";
export default {
  components: {
    ReportForm,
  },

  methods: {
    handleSubmit(payload) {
      console.log("handleSubmit > to be implemented", payload);
    },
  },
};
</script>

<style></style>
