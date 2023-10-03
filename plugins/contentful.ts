import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  return {
    provide: {
      contentfulClient: createClient({
        space: config.CTF_SPACE_ID,
        accessToken: config.CTF_CDA_ACCESS_TOKEN,
      }),
    },
  };
});
