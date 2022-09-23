<template>
  <div class="w-1/2">
    <div class="flex items-center justify-between">
      <div class="my-8">
        <h1 class="text-2xl text-bold">Tus reportes</h1>
        <p class="text-gray-300">{{ signature }}</p>
      </div>

      <nuxt-link
        class="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        :to="{ name: 'reports-new', query: { nonce } }"
      >
        Nuevo
      </nuxt-link>
    </div>

    <div class="border border-gray-300 rounded-md my-8">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="report in nonce" :key="report">
          <report-list-item :report="report" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ReportListItem from "~/components/Report/ListItem";

export default {
  components: {
    ReportListItem,
  },

  layout: "app",

  data() {
    return {
      nonce: "",
    };
  },

  computed: {
    ...mapState("auth", ["signature"]),
  },

  mounted() {
    this.fetchNonce();
  },

  methods: {
    async fetchNonce() {
      const {
        data: { nonce },
      } = await this.$axios.get(`api/nonces/${this.signature}`);

      this.nonce = nonce;
    },
  },
};
</script>
