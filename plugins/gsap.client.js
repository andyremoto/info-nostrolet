/* Plugins */
// plugins/gsap.client.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
    
    nuxtApp.vueApp.directive('gsap-fade-in', {
      mounted(el, binding) {
        gsap.from(el, {
          opacity: 0,
          y: binding.value?.y || 30,
          duration: binding.value?.duration || 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });
      }
    });
    
    nuxtApp.vueApp.directive('gsap-stagger', {
      mounted(el, binding) {
        const children = el.children;
        
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: binding.value?.y || 30,
          },
          {
            opacity: 1,
            y: 0,
            stagger: binding.value?.stagger || 0.1,
            duration: binding.value?.duration || 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      }
    });
    
    return {
      provide: {
        gsap,
        ScrollTrigger,
      },
    };
  }
});