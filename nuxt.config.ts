// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [// 引入 Pinia
  "@nuxt/ui", '@nuxtjs/tailwindcss', [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ], "@nuxtjs/i18n", "@pinia-plugin-persistedstate/nuxt"]
})