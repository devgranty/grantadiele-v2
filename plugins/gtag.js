export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
      const { gtagId } = useRuntimeConfig().public;
  
      if (gtagId) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
        document.head.appendChild(script);

        script.onload = () => {
          function gtag() {
            window.dataLayer.push(arguments);
          }
          window.dataLayer = window.dataLayer || [];
          gtag('js', new Date());
          gtag('config', gtagId);
        };
      }
    }
  });
  