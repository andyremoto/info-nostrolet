// components/Solution.vue
<template>
  <section class="section solution-section" id="solucao">
    <div class="container">
      <h2 class="section-title">Nossa Solução</h2>
      <p class="section-subtitle">
        A Nostrolet revoluciona o mercado imobiliário com uma plataforma baseada em blockchain, democratizando o acesso à propriedade e tornando-a acessível, fracionável, líquida e transparente.
      </p>
      
      <div class="solution-content">
        <div class="blockchain-visualization">
          <div class="chain">
            <div class="block" v-for="n in 5" :key="n">
              <div class="block-header">Bloco #{{ n }}</div>
              <div class="block-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <div class="block-hash">{{ generateHash() }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="solution-features">
          <div class="solution-feature">
            <div class="feature-title">
              <div class="feature-number">01</div>
              <h3>Tokenização com Blockchain</h3>
            </div>
            <p>Cada imóvel é registrado uma única vez como token na blockchain, garantindo autenticidade e transparência imutável.</p>
          </div>
          
          <div class="solution-feature">
            <div class="feature-title">
              <div class="feature-number">02</div>
              <h3>Compra Fracionada</h3>
            </div>
            <p>Qualquer pessoa pode comprar uma parte de um imóvel, a partir de valores baixos, e se tornar cotista do patrimônio.</p>
          </div>
          
          <div class="solution-feature">
            <div class="feature-title">
              <div class="feature-number">03</div>
              <h3>Morar e Recomprar</h3>
            </div>
            <p>É possível morar no imóvel enquanto se paga aluguel proporcional aos demais cotistas e ir recomprando tokens aos poucos até atingir 100% da propriedade.</p>
          </div>
          
          <div class="solution-feature">
            <div class="feature-title">
              <div class="feature-number">04</div>
              <h3>Uso Compartilhado</h3>
            </div>
            <p>Casas de temporada ou segunda moradia podem ser compradas por grupos de amigos ou investidores com divisão justa de uso ou lucro.</p>
          </div>
          
          <div class="solution-feature">
            <div class="feature-title">
              <div class="feature-number">05</div>
              <h3>Mercado Secundário com Liquidez</h3>
            </div>
            <p>Os tokens podem ser comprados e vendidos de forma rápida, resolvendo o histórico problema de liquidez do setor.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function generateHash() {
  const chars = '0123456789abcdef';
  let result = '0x';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
</script>

<style scoped>
.solution-section {
  background-color: var(--nostrolet-white);
}

.solution-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.blockchain-visualization {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chain {
  width: 100%;
}

.block {
  background-color: var(--nostrolet-white);
  border: 1px solid var(--nostrolet-light-gray);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
}

.block:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.block:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 20px;
  background-color: var(--nostrolet-light-gray);
}

.block-header {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--nostrolet-dark-blue);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--nostrolet-light-gray);
  margin-bottom: 15px;
}

.block-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.block-hash {
  font-family: monospace;
  font-size: 0.85rem;
  color: var(--nostrolet-gray);
}

.solution-features {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.solution-feature {
  border-left: 2px solid var(--nostrolet-blue);
  padding-left: 20px;
  transition: all 0.3s ease;
}

.solution-feature:hover {
  transform: translateX(5px);
}

.feature-title {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.feature-number {
  width: 35px;
  height: 35px;
  background-color: var(--nostrolet-light-blue);
  color: var(--nostrolet-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.feature-title h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--nostrolet-dark-blue);
}

.solution-feature p {
  font-size: 1rem;
  color: var(--nostrolet-gray);
  line-height: 1.6;
  padding-left: 50px;
}

@media (max-width: 992px) {
  .solution-content {
    grid-template-columns: 1fr;
  }
  
  .blockchain-visualization {
    order: 1;
  }
  
  .solution-features {
    order: 0;
  }
}

@media (max-width: 768px) {
  .solution-feature p {
    padding-left: 0;
  }
}
</style>