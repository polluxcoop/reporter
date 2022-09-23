<template>
  <div class="w-1/2">
    <div class="flex items-center justify-between">
      <div class="my-8">
        <h1 class="text-2xl text-bold">Tus reportes</h1>
        <p class="text-gray-300">{{ signature }}</p>
      </div>

      <nuxt-link
        class="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        :to="{ name: 'reports-new' }"
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
import { mapActions, mapState } from "vuex";

import ReportListItem from "~/components/Report/ListItem";

export default {
  components: {
    ReportListItem,
  },

  layout: "app",

  data() {
    return {
      nonce: "",
      reports: [
        // { id: "1", title: "Title Issue 1", content: "asd 1" },
        // { id: "2", title: "Title Issue 2", content: "asd 2" },
        // { id: "3", title: "Title Issue 3", content: "asd 3" },
        // { id: "4", title: "Title Issue 4", content: "asd 4" },
        // { id: "5", title: "Title Issue 5", content: "asd 5" },
        // { id: "6", title: "Title Issue 6", content: "asd 6" },
        // { id: "7", title: "Title Issue 7", content: "asd 7" },
        // { id: "8", title: "Title Issue 8", content: "asd 8" },
        // { id: "9", title: "Title Issue 9", content: "asd 9" },
        // { id: "10", title: "Title Issue 10", content: "asd 10" },
      ],
    };
  },

  computed: {
    ...mapState("auth", ["signature"]),
  },

  mounted() {
    this.fetchNonce();
  },

  methods: {
    // ...mapActions(),

    async fetchNonce() {
      console.log("fetchNonce");
      // GET api/nonces/signature

      const {
        data: { nonce },
      } = await this.$axios.get(`api/nonces/${this.signature}`);

      this.nonce = nonce;
    },
  },
};
</script>
