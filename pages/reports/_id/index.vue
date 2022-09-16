<template>
  <div>{{ reportId }}</div>
</template>

<script>
export default {
  computed: {
    reportId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
