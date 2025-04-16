// app.vue - Arquivo principal
<template>
  <div class="app">
    <Header />
    <main style="margin-top: -1px">
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Technology />
      <Impact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Problem from './components/Problem.vue';
import Solution from './components/Solution.vue';
import Technology from './components/Technology.vue';
import Impact from './components/Impact.vue';
import Footer from './components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --nostrolet-dark-blue: #002057;
  --nostrolet-blue: #0088ff;
  --nostrolet-light-blue: #e5f4ff;
  --nostrolet-white: #ffffff;
  --nostrolet-light-gray: #f5f7fa;
  --nostrolet-gray: #6e7581;
  --nostrolet-dark-gray: #2d3748;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--nostrolet-dark-gray);
  line-height: 1.6;
  background-color: var(--nostrolet-white);
}

.app {
  width: 100%;
  overflow-x: hidden;
}

main {
  margin-top: 80px;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 100px 0;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 45px;
  color: var(--nostrolet-dark-blue);
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--nostrolet-blue);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
  color: var(--nostrolet-gray);
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
}

.col {
  padding: 15px;
  flex: 1;
}

.col-half {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 15px;
}

.col-third {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 15px;
}

@media (max-width: 992px) {
  .col-half, .col-third {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .row {
    flex-direction: column;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>