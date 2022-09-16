<template>
  <div>{{ reportId }}</div>
</template>

<script>
export default {
  layout: "app",

  computed: {
    reportId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
