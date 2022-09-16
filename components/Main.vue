<template>
  <div class="w-60">
    <form v-if="step === 0" class="flex flex-col gap-4">
      <textarea
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        v-model="details"
        rows="3"
        placeholder="Detalles del reporte"
      ></textarea>
      <button
        type="button"
        class="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="step++"
      >
        Generar
      </button>
    </form>
    <form v-else-if="step === 1">
      <input
        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        v-model="signature"
        type="text"
        placeholder="Clave publica"
      />
      <div class="grid grid-cols-2 gap-4 mt-4">
        <button
          type="button"
          class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="step++"
        >
          Nuevo
        </button>
        <button
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="step--"
        >
          Atras
        </button>
      </div>
    </form>
    <template v-else-if="step === 2">
      <p
        class="mb-4 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm"
      >
        {{ details }}
      </p>
      <button
        type="button"
        class="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="step--"
      >
        Atras
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      details: "",
      signature: "",
      step: 0,
    };
  },
};
</script>
