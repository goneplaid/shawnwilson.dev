export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module", "shadcn-nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
});
