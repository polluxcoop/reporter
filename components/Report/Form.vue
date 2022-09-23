<template>
  <form class="flex flex-col gap-4">
    <input
      type="text"
      class="flex-grow-1 block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="Titulo"
      v-model="formData.title"
    />
    <textarea
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      v-model="formData.description"
      rows="3"
      placeholder="Detalles del reporte"
    ></textarea>
    <button
      type="button"
      class="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      @click="onSubmit"
    >
      Generar
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        description: "",
        title: "",
      },
    };
  },

  methods: {
    onSubmit() {
      this.$emit("submit", this.formData);
    },
  },
};
</script>

<style></style>
