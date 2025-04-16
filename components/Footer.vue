// components/Footer.vue
<template>
  <footer class="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center mb-8 md:mb-0">
          <div class="relative">
            <img src="/logo.svg" alt="NostroLet" class="h-12 mr-4" />
            <div class="absolute -top-1 -right-1 -bottom-1 -left-1 bg-blue-500 blur-lg opacity-30 rounded-full"></div>
          </div>
          <div class="flex flex-col">
            <h2 class="text-2xl font-bold">
              <span class="text-white tracking-widest">NOSTRO</span><span class="text-blue-400">LET</span>
            </h2>
            <p class="text-blue-300 text-sm mt-1">Tokenizando o futuro do mercado imobiliário</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:text-right">
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Contato</h3>
            <p class="text-gray-300 mb-2">contato@nostrolet.com</p>
            <p class="text-gray-300">+55 34 98417-6363</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Legal</h3>
            <p class="text-gray-300">&copy; {{ new Date().getFullYear() }} NostroLet</p>
            <p class="text-gray-300 mt-2">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
      
      <div class="divider mt-10 mb-8 border-t border-gray-700 opacity-30"></div>
      
      <div class="text-center">
        <p class="text-gray-400 text-sm">Construído com tecnologia blockchain para um futuro imobiliário descentralizado.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Sem lógica adicional necessária
</script>