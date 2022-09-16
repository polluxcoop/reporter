<template>
  <div class="flex">
    <input
      class="flex-grow-1 block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      v-model="publicKey"
      type="text"
      placeholder="Clave publica"
    />

    <button
      class="px-2 rounded-none rounded-r-md border-gray-300 bg-indigo-600 text-white"
      @click="submitSearch"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicKey: "",
    };
  },

  methods: {
    submitSearch() {
      this.$emit("search", this.publicKey);
    },
  },
};
</script>

<style></style>
