// components/CTA.vue
<template>
  <section class="section cta-section" id="contato">
    <div class="container">
      <div class="cta-container">
        <div class="cta-content">
          <h2>Pronto para Revolucionar seu Investimento Imobiliário?</h2>
          <p>Entre em contato conosco e descubra como a Nostrolet pode ajudar você a acessar o mercado imobiliário de forma inteligente, acessível e inovadora.</p>
          
          <form class="cta-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Nome completo" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="E-mail" required>
            </div>
            <div class="form-group">
              <input type="tel" v-model="form.phone" placeholder="Telefone" required>
            </div>
            <div class="form-group">
              <select v-model="form.interest" required>
                <option value="" disabled selected>Selecione seu interesse</option>
                <option value="investor">Investir em imóveis</option>
                <option value="resident">Morar em imóvel fracionado</option>
                <option value="developer">Sou incorporador/construtor</option>
                <option value="partner">Parceria comercial</option>
              </select>
            </div>
            <div class="form-group full-width">
              <textarea v-model="form.message" placeholder="Mensagem (opcional)" rows="3"></textarea>
            </div>
            <button type="submit" class="submit-button" :disabled="submitting">
              {{ submitting ? 'Enviando...' : 'Entrar em Contato' }}
            </button>
          </form>
        </div>
        
        <div class="cta-image">
          <div class="property-card">
            <div class="property-image">
              <img src="/property-example.jpg" alt="Exemplo de Propriedade">
              <div class="property-tag">Tokenizado</div>
            </div>
            <div class="property-details">
              <h3>Apartamento Premium</h3>
              <p class="property-location">Jardins, São Paulo</p>
              <div class="property-price">
                <div class="price-tag">Valor total: R$ 1.200.000</div>
                <div class="token-price">Token a partir de: R$ 100</div>
              </div>
              <div class="property-meta">
                <div class="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>120 m²</span>
                </div>
                <div class="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>3 Quartos</span>
                </div>
                <div class="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>
                  <span>2 Banheiros</span>
                </div>
              </div>
              <div class="property-progress">
                <div class="progress-label">
                  <span>Tokenização</span>
                  <span>75% completo</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 75%;"></div>
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
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: ''
});

const submitting = ref(false);

const handleSubmit = () => {
  submitting.value = true;
  
  // Simulação de envio de formulário
  setTimeout(() => {
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.name = '';
    form.email = '';
    form.phone = '';
    form.interest = '';
    form.message = '';
    submitting.value = false;
  }, 1500);
};
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, var(--nostrolet-dark-blue), #001235);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.cta-content h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
}

.cta-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cta-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  position: relative;
}

.form-group.full-width {
  grid-column: span 2;
}

.cta-form input,
.cta-form select,
.cta-form textarea {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.cta-form input::placeholder,
.cta-form textarea::placeholder,
.cta-form select {
  color: rgba(255, 255, 255, 0.7);
}

.cta-form input:focus,
.cta-form textarea:focus,
.cta-form select:focus {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 2px rgba(0, 136, 255, 0.5);
}

.cta-form select option {
  background-color: var(--nostrolet-dark-blue);
  color: white;
}

.submit-button {
  grid-column: span 2;
  background-color: var(--nostrolet-blue);
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: var(--nostrolet-light-blue);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

.submit-button:disabled {
  background-color: rgba(0, 136, 255, 0.5);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.cta-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.property-card {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.property-card:hover {
  transform: translateY(-10px) rotate(2deg);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2);
}

.property-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.property-card:hover .property-image img {
  transform: scale(1.1);
}

.property-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--nostrolet-blue);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.property-details {
  padding: 20px;
  color: var(--nostrolet-dark-gray);
}

.property-details h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--nostrolet-dark-blue);
}

.property-location {
  font-size: 0.9rem;
  color: var(--nostrolet-dark-gray);
  margin-bottom: 15px;
}

.property-price {
  margin-bottom: 15px;
}

.price-tag {
  font-size: 0.9rem;
  color: var(--nostrolet-dark-gray);
  margin-bottom: 5px;
}

.token-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--nostrolet-blue);
}

.property-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  color: var(--nostrolet-dark-gray);
}

.property-progress {
  margin-top: 10px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.progress-bar {
  height: 8px;
  background-color: var(--nostrolet-light-gray);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--nostrolet-blue);
  border-radius: 10px;
}

@media (max-width: 968px) {
  .cta-container {
    grid-template-columns: 1fr;
  }
  
  .cta-content {
    order: 1;
  }
  
  .cta-image {
    order: 2;
  }
}

@media (max-width: 768px) {
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .cta-form {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .submit-button {
    grid-column: span 1;
  }
}
</style>
