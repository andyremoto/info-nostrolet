// components/Problem.vue
<template>
  <section class="section problem-section" id="problema">
    <div class="container">
      <h2 class="section-title">O Problema que Resolvemos</h2>
      <p class="section-subtitle">
        O mercado imobiliário tradicional apresenta barreiras significativas para milhões de pessoas. 
        Identificamos os pontos críticos que impedem o acesso à propriedade imobiliária.
      </p>
      
      <div class="problem-grid">
        <div class="problem-item">
          <div class="problem-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h3>Entrada alta</h3>
          <p>Crédito inacessível e altos valores de entrada dificultam o acesso à casa própria para milhões de pessoas.</p>
        </div>
        
        <div class="problem-item">
          <div class="problem-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <h3>Imóveis parados</h3>
          <p>Milhões de imóveis parados no Brasil e no mundo geram prejuízos para incorporadoras e investidores.</p>
        </div>
        
        <div class="problem-item">
          <div class="problem-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Mercado lento e burocrático</h3>
          <p>O mercado imobiliário tradicional é lento, cheio de intermediários, burocrático e ilíquido.</p>
        </div>
        
        <div class="problem-item">
          <div class="problem-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3>Investimento restrito</h3>
          <p>Investimento em imóveis é restrito a grandes fundos ou pessoas com alto capital, excluindo a maioria.</p>
        </div>
      </div>
      
      <div class="problem-stats">
        <div class="stat">
          <div class="stat-value">7.8M+</div>
          <div class="stat-label">Imóveis desocupados no Brasil</div>
        </div>
        <div class="stat">
          <div class="stat-value">70%</div>
          <div class="stat-label">Da população sem acesso a crédito imobiliário</div>
        </div>
        <div class="stat">
          <div class="stat-value">5.5</div>
          <div class="stat-label">Meses em média para vender um imóvel</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem lógica adicional necessária
</script>

<style scoped>
.problem-section {
  background-color: var(--nostrolet-light-gray);
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.problem-item {
  background-color: var(--nostrolet-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.problem-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.problem-icon {
  width: 60px;
  height: 60px;
  background-color: var(--nostrolet-light-blue);
  color: var(--nostrolet-blue);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.problem-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--nostrolet-dark-blue);
}

.problem-item p {
  font-size: 1rem;
  color: var(--nostrolet-gray);
  line-height: 1.6;
}

.problem-stats {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.stat {
  background-color: var(--nostrolet-white);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-top: 3px solid var(--nostrolet-blue);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--nostrolet-dark-blue);
  margin-bottom: 10px;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--nostrolet-gray);
  line-height: 1.4;
}

@media (max-width: 992px) {
  .problem-grid {
    grid-template-columns: 1fr;
  }
  
  .problem-stats {
    flex-direction: column;
  }
  
  .stat {
    padding: 20px;
  }
  
  .stat-value {
    font-size: 2rem;
  }
}
</style>