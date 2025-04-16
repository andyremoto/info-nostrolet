// components/Hero.vue
<template>
  <section class="hero" id="inicio" style="margin-top: 0; padding-top: 0;">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>NOSTROLET</h1>
          <h2>O Futuro da Propriedade Imobiliária Já Começou</h2>
          <p>
            Uma plataforma descentralizada que revoluciona o conceito de posse imobiliária ao tokenizar imóveis e permitir o investimento fracionado com tecnologia blockchain.
          </p>
        </div>
        <div class="hero-image">
          <div class="property-card">
            <div class="property-image-container">
              <img src="/property-example.jpg" alt="Propriedade Tokenizada" class="property-img" />
              <div class="property-badge">Tokenizado</div>
            </div>
            <div class="property-info">
              <h3 class="property-title">Casa Blue Premium</h3>
              <div class="property-price">
                <div class="total-value">Valor total: R$ 900.000</div>
                <div class="token-value">Token: R$ 100,00/unid.</div>
              </div>
              <div class="token-sale">
                <div class="progress-bar">
                  <div class="progress" style="width: 72%;"></div>
                </div>
                <div class="token-status">6.500/9.000 tokens vendidos</div>
              </div>
              <div class="property-features">
                <div class="feature"><span class="icon">🏠</span> 3 Quartos</div>
                <div class="feature"><span class="icon">🛁</span> 1 Suítes</div>
                <div class="feature"><span class="icon">📏</span> 225m²</div>
                <div class="feature"><span class="icon">🚗</span> 2 Vagas</div>
                
                <div class="feature availability"><span class="icon">🔑</span> alugar</div>
                <div class="feature availability"><span class="icon">💸</span> vender</div>
              </div>
              <div class="property-actions">
                <a href="#" class="action-btn buy-btn">Comprar Tokens</a>
              </div>
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
.hero {
  padding: 0 0 100px;
  margin-top: 0;
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
  min-height: 650px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -5%;
  width: 45%;
  height: 75%;
  background: radial-gradient(circle, rgba(0, 136, 255, 0.03) 0%, rgba(0, 136, 255, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -15%;
  left: -10%;
  width: 50%;
  height: 60%;
  background: radial-gradient(circle, rgba(0, 98, 189, 0.02) 0%, rgba(0, 98, 189, 0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding-top: 60px;
}

.hero-text {
  padding-right: 20px;
}

.hero h1 {
  font-size: 3.7rem;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 24px;
  color: var(--nostrolet-dark-blue);
  position: relative;
}

.hero h1::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 80px;
  height: 3px;
  background: var(--nostrolet-blue);
  border-radius: 2px;
}

.hero h2 {
  font-size: 1.7rem;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 35px;
  color: var(--nostrolet-gray);
  max-width: 95%;
}

.hero p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 40px;
  color: var(--nostrolet-gray);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.property-card {
  width: 380px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 32, 87, 0.12), 0 4px 12px rgba(0, 32, 87, 0.08);
  background-color: white;
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid rgba(0, 136, 255, 0.08);
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 48px rgba(0, 27, 61, 0.16), 0 8px 16px rgba(0, 27, 61, 0.08);
}

.property-image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.property-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.property-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(120deg, var(--nostrolet-blue) 0%, #0065d0 100%);
  color: white;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 136, 255, 0.3);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.property-info {
  padding: 22px;
  border-top: 1px solid var(--nostrolet-light-gray);
  position: relative;
}

.property-info::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0;
  width: 40%;
  height: 2px;
  background: linear-gradient(90deg, var(--nostrolet-blue) 0%, rgba(0, 136, 255, 0) 100%);
}

.property-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--nostrolet-dark-blue);
}

.property-price {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 0.9rem;
  font-weight: 500;
}

.token-value {
  font-weight: 600;
  color: var(--nostrolet-blue);
}

.total-value {
  color: var(--nostrolet-dark-gray);
}

.token-sale {
  margin-bottom: 8px;
}

.progress-bar {
  height: 6px;
  width: 100%;
  background-color: var(--nostrolet-light-gray);
  border-radius: 4px;
  margin-bottom: 6px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--nostrolet-blue) 0%, #0080e5 100%);
  border-radius: 4px;
  position: relative;
}

.progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%);
  background-size: 200% 100%;
  animation: shine 2s infinite;
}

.token-status {
  font-size: 0.8rem;
  color: var(--nostrolet-dark-gray);
  text-align: right;
}

.property-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 18px;
}

.feature {
  background-color: var(--nostrolet-light-blue);
  color: var(--nostrolet-dark-blue);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 98, 189, 0.1);
  box-shadow: 0 1px 2px rgba(0, 27, 61, 0.04);
}

.feature.availability {
  background-color: rgba(0, 136, 255, 0.15);
  border: 1px solid rgba(0, 136, 255, 0.2);
}

.icon {
  margin-right: 5px;
}

.property-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 27, 61, 0.08);
  position: relative;
  overflow: hidden;
  z-index: 1;
}



.action-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%);
  transition: all 0.6s ease;
  z-index: -1;
}

.action-btn:hover::before {
  left: 100%;
}



.buy-btn {
  background: linear-gradient(120deg, var(--nostrolet-blue) 0%, #0052a3 100%);
  color: white;
  border: 1px solid transparent;
}

.buy-btn:hover {
  background: linear-gradient(120deg, #0052a3 0%, var(--nostrolet-dark-blue) 100%);
  box-shadow: 0 4px 10px rgba(0, 27, 61, 0.25);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(0) translateX(10px);
  }
  75% {
    transform: translateY(10px) translateX(5px);
  }
}

@keyframes shine {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  
  .hero-text {
    padding-right: 0;
    order: 0;
    margin-bottom: 40px;
  }
  
  .hero-image {
    order: 1;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero h2 {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .property-card {
    width: 300px;
    margin: 0 auto;
  }
  
  .property-image-container {
    height: 200px;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero h2 {
    font-size: 1.4rem;
  }
  
  .property-info {
    padding: 12px;
  }
  
  .property-title {
    font-size: 1rem;
    margin-bottom: 6px;
  }
  
  .property-price {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
  
  .feature {
    font-size: 0.75rem;
    padding: 2px 6px;
  }
  
  .token-status {
    font-size: 0.7rem;
  }
}
</style>