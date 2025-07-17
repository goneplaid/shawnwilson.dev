// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/scripts",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  app: {
    head: {
      link: [
        // SVG favicon for modern browsers
        // TODO: Don't forget to eventaully add a favicon.ico file to the project
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
    },
  },
  googleFonts: {
    families: {
      Inter: true,
      "Playfair+Display": true,
    },
    display: "swap",
    prefetch: true,
    preload: true,
  },
  css: ["~/assets/css/tailwind.css"],
});