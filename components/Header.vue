// components/Header.vue

<template>
  <header class="bg-white backdrop-blur-md bg-opacity-90 sticky top-0 z-10 shadow-premium transition-all duration-300 mb-0 pb-0" :class="{'py-2 shadow-lg': scrolled}">
    <div class="max-w-7xl mx-auto px-4 py-3 pb-2 flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center group">
          <img src="/logo.svg" alt="NostroLet" class="h-12 mr-3 transition-transform duration-500 transform group-hover:scale-110 rounded shadow-lg" />
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold">
              <span class="text-gray-900 tracking-widest">NOSTRO</span><span class="text-blue-600 tracking-widest">LET</span>
            </h1>
            <span class="text-xs text-gray-500 -mt-1">Mercado Imobiliário Tokenizado</span>
          </div>
        </NuxtLink>
      </div>
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="item in navItems" :key="item.path">
            <a 
              :href="item.path" 
              class="px-3 py-2 relative group overflow-hidden" 
              :class="{'text-blue-700 font-semibold': isActive(item.path), 'text-gray-700 hover:text-blue-600': !isActive(item.path)}"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 origin-bottom-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                :class="{'scale-x-100': isActive(item.path)}"
              ></span>
            </a>
          </li>
        </ul>
      </nav>
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden bg-gray-100 hover:bg-gray-200 transition-colors duration-300 p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4 shadow-lg">
        <ul class="px-6 space-y-3">
          <li v-for="item in navItems" :key="item.path">
            <a 
              :href="item.path" 
              class="block px-4 py-3 rounded-lg transition-all duration-300"
              :class="{'bg-blue-50 text-blue-700 font-semibold shadow-sm': isActive(item.path), 'text-gray-700 hover:bg-gray-50 hover:text-blue-600': !isActive(item.path)}"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const navItems = [
  { name: 'Início', path: '#inicio' },
  { name: 'Sobre', path: '#sobre' },
  { name: 'Problema', path: '#problema' },
  { name: 'Solução', path: '#solucao' },
  { name: 'Tecnologia', path: '#tecnologia' },
  { name: 'Impacto', path: '#impacto' },
  { name: 'Contato', path: '#contato' }
];

const isActive = (path) => {
  // For hash-based navigation, we can check if the hash matches
  // If using proper routing, we would use $route.path === path
  return window.location.hash === path;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.shadow-premium {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>