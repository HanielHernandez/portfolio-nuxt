import es from "./lang/es";

// https://nuxt.com/docs/api/configuration/nuxt-config
const getLocal = (): string => {
  return (
    localStorage.getItem("lang") ||
    (navigator.language == "es-ES" ? "es" : "en")
  );
};

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/storybook"
  ],
  runtimeConfig: {
    public: {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en-US.js",
      },
      {
        code: "es",
        name: "Español",
        file: "es.js",
      },
    ],
    // lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
      fallbackLocale: "en",
    },
    baseUrl: "",
    strategy: "prefix",
    langDir: "/lang",
    defaultLocale: "en",
    skipSettingLocaleOnNavigate: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/globals.scss" as *;',
        },
      },
    },
  },
  build: {
    transpile: ["gsap"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Haniel Hernandez - Frontend Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Personal website/portfolio of Haniel Hernandez",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
