// components/Technology.vue
<template>
  <section class="section technology-section" id="tecnologia">
    <div class="container">
      <h2 class="section-title">Diferenciais Tecnológicos</h2>
      <p class="section-subtitle">
        A Nostrolet combina o melhor da tecnologia blockchain com uma experiência de usuário premium para redefinir o conceito de propriedade imobiliária.
      </p>
      
      <div class="tech-grid">
        <div class="tech-item">
          <div class="tech-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h3>Registro Único e Imutável</h3>
          <p>Cada imóvel só pode ser registrado uma única vez na blockchain, garantindo autenticidade e prevenindo fraudes.</p>
        </div>
        
        <div class="tech-item">
          <div class="tech-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h3>Transparência Total</h3>
          <p>Todas as transações são visíveis na blockchain, garantindo transparência e auditoria descentralizada.</p>
        </div>
        
        <div class="tech-item">
          <div class="tech-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path>
            </svg>
          </div>
          <h3>Experiência Premium</h3>
          <p>Plataforma integrada com carteiras digitais e experiência de usuário premium, intuitiva e segura.</p>
        </div>
        
        <div class="tech-item">
          <div class="tech-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3>Segurança Jurídica</h3>
          <p>Contratos inteligentes validados garantem segurança jurídica e automatização dos processos.</p>
        </div>
      </div>
      
      <div class="tech-workflow">
        <h3 class="workflow-title">Como Funciona a Tecnologia</h3>
        
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Tokenização do Imóvel</h4>
              <p>O imóvel é registrado na blockchain como um ativo digital com tokens que representam frações da propriedade.</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Verificação e Validação</h4>
              <p>A tecnologia verifica automaticamente a autenticidade e unicidade do imóvel através de validadores descentralizados.</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Contratos Inteligentes</h4>
              <p>Smart contracts auto-executáveis garantem o cumprimento das regras e automatizam transações financeiras.</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Marketplace Líquido</h4>
              <p>O mercado secundário permite compra e venda dos tokens com liquidez instantânea e segurança garantida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem lógica adicional necessária
</script>

<style scoped>
.technology-section {
  background-color: var(--nostrolet-light-gray);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.tech-item {
  background-color: var(--nostrolet-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.tech-icon {
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

.tech-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--nostrolet-dark-blue);
}

.tech-item p {
  font-size: 1rem;
  color: var(--nostrolet-gray);
  line-height: 1.6;
}

.tech-workflow {
  background-color: var(--nostrolet-white);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.workflow-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--nostrolet-dark-blue);
}

.workflow-steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.workflow-step {
  display: flex;
  gap: 20px;
}

.step-number {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: var(--nostrolet-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.step-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--nostrolet-dark-blue);
}

.step-content p {
  font-size: 1rem;
  color: var(--nostrolet-gray);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-workflow {
    padding: 30px;
  }
}
</style>
