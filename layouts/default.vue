<template>
  <div class="flex justify-center items-center w-full min-h-screen">
    <nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["signature"]),
  },

  mounted() {
    if (this.signature) {
      this.$router.replace("/");
    }
  },
};
</script>

<style></style>
