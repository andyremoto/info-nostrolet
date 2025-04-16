// components/About.vue
<template>
  <section class="section about-section" id="sobre">
    <div class="container">
      <h2 class="section-title">Visão Geral</h2>
      <p class="section-subtitle">
        A Nostrolet une segurança, liquidez e acessibilidade para transformar a forma como o mundo investe, compra e mora.
      </p>
      
      <div class="about-content">
        <div class="about-features">
          <div class="about-feature">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div class="feature-text">
              <h3>Segurança</h3>
              <p>Tecnologia blockchain garante propriedade imutável e prevenção contra fraudes.</p>
            </div>
          </div>
          
          <div class="about-feature">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <div class="feature-text">
              <h3>Liquidez</h3>
              <p>Mercado secundário de tokens permite compra e venda de frações imobiliárias sem burocracia.</p>
            </div>
          </div>
          
          <div class="about-feature">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="feature-text">
              <h3>Acessibilidade</h3>
              <p>Democratização do investimento imobiliário com entradas a partir de R$ 100.</p>
            </div>
          </div>
        </div>
        
        <div class="about-description">
          <p>
            A <strong>NostroLet</strong> é uma plataforma global que revoluciona a forma como o mundo compra, vende e investe em imóveis. Por meio da <strong>tokenização imobiliária com tecnologia blockchain</strong>, transformamos propriedades físicas em ativos digitais fracionados, acessíveis a qualquer pessoa, em qualquer lugar.
          </p>
          <p>
            No cenário <strong>global</strong>, a tokenização de ativos já movimenta bilhões de dólares, tornando-se uma tendência irreversível no setor financeiro e imobiliário. NostroLet surge como parte dessa revolução, oferecendo uma infraestrutura confiável, regulada e altamente escalável para conectar investidores internacionais a oportunidades imobiliárias de alta qualidade — sem as barreiras tradicionais como cartórios, intermediários e burocracias.
          </p>
          <p>
            No <strong>Brasil</strong>, a realidade é ainda mais promissora. Milhares de imóveis encalhados em estoques de grandes incorporadoras, somados à alta demanda por moradia e baixa acessibilidade ao crédito, criam um terreno fértil para inovação. O NostroLet atua como ponte entre esses dois mundos: transforma imóveis parados em ativos líquidos e, ao mesmo tempo, possibilita que brasileiros comuns — a partir de valores baixos como R$100 — tornem-se cotistas de empreendimentos antes inacessíveis.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem lógica adicional necessária
</script>

<style scoped>
.about-section {
  background-color: var(--nostrolet-white);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-feature {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background-color: var(--nostrolet-light-gray);
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.about-feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  min-width: 50px;
  height: 50px;
  background-color: var(--nostrolet-white);
  color: var(--nostrolet-blue);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 136, 255, 0.1);
}

.feature-text h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--nostrolet-dark-blue);
}

.feature-text p {
  font-size: 0.95rem;
  color: var(--nostrolet-gray);
  line-height: 1.6;
}

.about-description {
  background-color: var(--nostrolet-light-gray);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.about-description p {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--nostrolet-dark-gray);
}

.about-description p:last-child {
  margin-bottom: 0;
}

.about-description strong {
  color: var(--nostrolet-dark-blue);
  font-weight: 600;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-features {
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .about-feature {
    padding: 20px;
  }
  
  .about-description {
    padding: 25px;
  }
}
</style>