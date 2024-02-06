// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt 3 Simple Shop",
      meta: [
        {
          name: "description",
          content:
            "Nuxt 3 Simple Shop was created through a tutorial, providing a hands-on learning experience to implement key Nuxt.js concepts and techniques.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
