// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content"],
  content: {
    highlight: {
      theme: "github-dark",
      preload: [
        "python",
        "javascript",
        "html",
        "css",
        "bash",
        "json",
        "markdown",
        "yaml",
        "vue",
      ],
    },
  },
  devtools: { enabled: true },
});
