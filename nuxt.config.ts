import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static',
    serveStatic: true
  },
  experimental: {
    payloadExtraction: false
  },
  app: {
    head: {
      title: 'Nostrolet - O Futuro da Propriedade Imobiliária',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description', 
          name: 'description', 
          content: 'Nostrolet é uma plataforma descentralizada que revoluciona o conceito de posse imobiliária ao tokenizar imóveis e permitir o investimento fracionado com tecnologia blockchain.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#002057' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: [
      'gsap',
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['gsap'],
    },
  }
})
