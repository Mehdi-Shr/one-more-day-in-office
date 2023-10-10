// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  pages:true,

  css: [
    "@/assets/scss/main.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },

  app: {
    head: {
      title: 'One More Day In Office',
      meta: [
        {
          name: 'description',
          content:''
        }
      ],

      link: [
        { rel: 'icon', type: 'image/svg+xml', sizes: '180x180', href: '/_nuxt/icons/logo.svg' },
      ],
    },
  },
})
