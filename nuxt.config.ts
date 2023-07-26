// https://nuxt.com/docs/api/configuration/nuxt-config
import {NuxtConfig} from "@nuxt/schema";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    // 引入 Pinia
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ]
} as any)
