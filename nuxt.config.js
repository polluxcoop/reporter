import path from "path";

/* eslint-disable */
const dbPath = path.resolve(__dirname, "./api/db/base.db");

export default {
  axios: {
    baseURL: "/",
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  db: {
    dialect: "sqlite",
    storage: dbPath,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "reporter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [{ src: "https://cdn.tailwindcss.com?plugins=forms" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/client-init", mode: "client" },
    { src: "~/plugins/wallet", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ["~/api"],
};
