<template>
  <div class="flex justify-center items-center w-full min-h-screen">
    <nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["account"]),
  },

  mounted() {
    if (!this.account) {
      this.$router.replace("access");
    }
  },
};
</script>

<style></style>
