import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
  }

  ScrollTrigger.defaults({
    start: "top 80%",
    toggleActions: "play none none none"
  });
  
  return {
    provide: {
      gsap
    },
  }
});
