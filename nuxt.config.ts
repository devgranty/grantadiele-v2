// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtagId: 'G-RCB169D9B7',
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0' },
        { rel: 'icon', href:'/favicon.ico' },
        { rel: 'canonical', href: 'https://devgranty.netlify.app' },

      ],
      meta: [
        { name: 'robots', content: 'index,follow' },
        { name: 'theme-color', content: '#050000' },
        { name: 'description', content: "I'm a full-stack developer based in Nigeria focused on creating functional and intuitive interfaces and back-end systems that are fast, scalable and secure." },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://devgranty.netlify.app/img/grant-adiele-img.jpg' },
        { name: 'twitter:description', content: "I'm a full-stack developer based in Nigeria focused on creating functional and intuitive interfaces and back-end systems that are fast, scalable and secure."}, 
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
