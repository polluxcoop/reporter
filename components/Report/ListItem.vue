<template>
  <nuxt-link :to="{ name: 'reports-id', params: { id: report.id } }">
    <div class="flex items-center px-4 py-4 sm:px-6 hover:bg-gray-50">
      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="truncate">
          <div class="flex text-sm">
            <p class="truncate font-medium text-indigo-600">
              {{ report.title }}
            </p>
            <p class="ml-1 flex-shrink-0 font-normal text-gray-500">
              in backlog
            </p>
          </div>
          <div class="mt-2 flex">
            <div class="flex items-center text-sm text-gray-500">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>

              <p class="ml-2">Reportado el 16/9/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-5 flex-shrink-0">Ver detalles</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    report: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style></style>
