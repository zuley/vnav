import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const elementToMove = document.head.querySelector('[data-vite-dev-id$="tailwind.css"]');
    const firstChild = document.head.firstChild;
    
    if (elementToMove && firstChild) {
      document.head.insertBefore(elementToMove, firstChild);
    }
  })
})