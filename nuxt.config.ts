// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  pages:true,

  css: [
    "@/assets/css/main.css",
  ],
})
