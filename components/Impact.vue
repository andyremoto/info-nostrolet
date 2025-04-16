// components/Impact.vue
<template>
  <section class="section impact-section" id="impacto">
    <div class="container">
      <h2 class="section-title">Impacto Global e Local</h2>
      <p class="section-subtitle">
        A Nostrolet está transformando o mercado imobiliário globalmente, democratizando o acesso a um dos ativos mais valiosos do planeta.
      </p>
      
      <div class="impact-tabs">
        <div class="tab-headers">
          <button 
            :class="['tab-button', { 'active': activeTab === 'global' }]"
            @click="activeTab = 'global'"
          >
            Impacto Global
          </button>
          <button 
            :class="['tab-button', { 'active': activeTab === 'brasil' }]"
            @click="activeTab = 'brasil'"
          >
            Impacto no Brasil
          </button>
        </div>
        
        <div class="tab-content">
          <div v-if="activeTab === 'global'" class="tab-pane">
            <div class="global-impact">
              <div class="global-points">
                <div class="impact-point">
                  <div class="point-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div class="point-content">
                    <h3>Investimento Global</h3>
                    <p>Pessoas de qualquer lugar do mundo podem investir em imóveis em mercados emergentes ou valorizados, quebrando barreiras geográficas.</p>
                  </div>
                </div>
                
                <div class="impact-point">
                  <div class="point-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div class="point-content">
                    <h3>Redução da Concentração</h3>
                    <p>Democratização do patrimônio imobiliário reduz a concentração de riqueza nas mãos de poucos, distribuindo oportunidades.</p>
                  </div>
                </div>
                
                <div class="impact-point">
                  <div class="point-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div class="point-content">
                    <h3>Acesso Universal</h3>
                    <p>Democratização de um dos ativos mais valorizados do planeta, permitindo que pequenos investidores participem do mercado imobiliário.</p>
                  </div>
                </div>
              </div>
              
              <div class="global-visual">
                <div class="world-map">
                  <div class="map-connection" v-for="i in 5" :key="i"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeTab === 'brasil'" class="tab-pane">
            <div class="brasil-impact">
              <div class="brasil-stats">
                <div class="br-stat">
                  <div class="stat-value">R$ 100</div>
                  <div class="stat-label">Valor mínimo para investimento</div>
                </div>
                <div class="br-stat">
                  <div class="stat-value">7.8M+</div>
                  <div class="stat-label">Imóveis desocupados</div>
                </div>
                <div class="br-stat">
                  <div class="stat-value">-90%</div>
                  <div class="stat-label">Redução em burocracia</div>
                </div>
              </div>
              
              <div class="brasil-points">
                <div class="br-point">
                  <div class="point-number">01</div>
                  <div class="point-content">
                    <h3>Acesso ao Mercado</h3>
                    <p>Permite que qualquer brasileiro, a partir de R$ 100, invista em imóveis de alto padrão e construa patrimônio de forma progressiva.</p>
                  </div>
                </div>
                
                <div class="br-point">
                  <div class="point-number">02</div>
                  <div class="point-content">
                    <h3>Transformação de Estoques</h3>
                    <p>Ajuda grandes incorporadoras a transformarem estoques parados em ativos líquidos, movimentando o mercado imobiliário.</p>
                  </div>
                </div>
                
                <div class="br-point">
                  <div class="point-number">03</div>
                  <div class="point-content">
                    <h3>Inclusão Habitacional</h3>
                    <p>Cria novos caminhos para a inclusão habitacional inteligente e flexível, permitindo modelos híbridos de aquisição.</p>
                  </div>
                </div>
                
                <div class="br-point">
                  <div class="point-number">04</div>
                  <div class="point-content">
                    <h3>Redução de Burocracia</h3>
                    <p>Elimina cartórios, reduz burocracia e acelera processos de compra e venda de imóveis através da tecnologia blockchain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('global');
</script>

<style scoped>
.impact-section {
  background-color: var(--nostrolet-white);
}

.impact-tabs {
  margin-top: 40px;
}

.tab-headers {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.tab-button {
  padding: 12px 30px;
  background-color: var(--nostrolet-light-gray);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nostrolet-gray);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button.active {
  background-color: var(--nostrolet-blue);
  color: white;
  box-shadow: 0 5px 15px rgba(0, 136, 255, 0.2);
}

.tab-content {
  min-height: 450px;
}

.tab-pane {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Global Impact */
.global-impact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.global-points {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.impact-point {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background-color: var(--nostrolet-light-gray);
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.impact-point:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.point-icon {
  min-width: 45px;
  height: 45px;
  background-color: var(--nostrolet-white);
  color: var(--nostrolet-blue);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.point-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--nostrolet-dark-blue);
}

.point-content p {
  font-size: 0.95rem;
  color: var(--nostrolet-gray);
  line-height: 1.6;
}

.global-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.world-map {
  width: 100%;
  height: 300px;
  background-color: var(--nostrolet-light-gray);
  border-radius: 15px;
  background-image: url('/world-map.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.map-connection {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: var(--nostrolet-blue);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.map-connection:nth-child(1) { top: 30%; left: 25%; animation-delay: 0s; }
.map-connection:nth-child(2) { top: 45%; left: 60%; animation-delay: 0.5s; }
.map-connection:nth-child(3) { top: 70%; left: 40%; animation-delay: 1s; }
.map-connection:nth-child(4) { top: 55%; left: 80%; animation-delay: 1.5s; }
.map-connection:nth-child(5) { top: 20%; left: 50%; animation-delay: 2s; }

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

/* Brasil Impact */
.brasil-impact {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.brasil-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.br-stat {
  background-color: var(--nostrolet-light-gray);
  padding: 25px;
  border-radius: 10px;
  text-align: center;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--nostrolet-blue);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--nostrolet-gray);
}

.brasil-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.br-point {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background-color: var(--nostrolet-light-gray);
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.br-point:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.point-number {
  min-width: 35px;
  height: 35px;
  background-color: var(--nostrolet-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .global-impact {
    grid-template-columns: 1fr;
  }
  
  .global-visual {
    order: 0;
    margin-bottom: 30px;
  }
  
  .global-points {
    order: 1;
  }
  
  .brasil-stats, .brasil-points {
    grid-template-columns: 1fr;
  }
}
</style>
