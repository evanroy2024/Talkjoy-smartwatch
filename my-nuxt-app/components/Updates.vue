<template>
  <section id="newsletter-section" class="nl-section" ref="sectionRef">
    <div class="nl-container">
      <div class="nl-content-wrapper">
        
        <!-- Left Content with More Margin -->
        <div class="nl-left-content" :class="sectionVisible ? 'nl-fade-in' : ''">
          <div class="nl-badge">Our Newsletter</div>
          <h2 class="nl-title">
            Subscribe Our Newsletter
            <br>
            to Get More Updates
          </h2>
          
          <!-- Email Form -->
          <form @submit.prevent="handleSubmit" class="nl-form">
            <div class="nl-input-wrapper">
              <input
                v-model="email"
                type="email"
                placeholder="Enter Email Address"
                class="nl-email-input"
                required
              />
              <button type="submit" class="nl-submit-btn">
                <span>Sign up</span>
                <svg class="nl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
          
          <!-- Frequency Options -->
          <div class="nl-options">
            <label class="nl-option">
              <input 
                v-model="frequency" 
                type="radio" 
                value="weekly" 
                class="nl-radio"
              />
              <span class="nl-checkmark"></span>
              <span class="nl-option-text">Weekly Updates</span>
            </label>
            
            <label class="nl-option">
              <input 
                v-model="frequency" 
                type="radio" 
                value="monthly" 
                class="nl-radio"
              />
              <span class="nl-checkmark"></span>
              <span class="nl-option-text">Monthly Updates</span>
            </label>
          </div>
        </div>

        <!-- Right Content - Image Taking Full Height -->
        <div class="nl-right-content" :class="sectionVisible ? 'nl-fade-in-delay' : ''">
          <div class="nl-illustration-wrapper">
            <!-- Image taking full height of section -->
            <img 
              src="https://img.freepik.com/premium-vector/woman-sitting-with-laptop-computer-vector-illustration-flat-design_598821-116.jpg"
              alt="Woman working on laptop"
              class="nl-main-illustration nl-floating"
              @error="handleImageError"
            />
            
            <!-- Decorative Elements -->
            <div class="nl-decoration-stripes"></div>
            <div class="nl-decoration-dots"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const email = ref('')
const frequency = ref('weekly')
const sectionVisible = ref(false)
const sectionRef = ref(null)

const handleSubmit = () => {
  if (email.value) {
    console.log('Newsletter subscription:', {
      email: email.value,
      frequency: frequency.value
    })
    alert(`Thanks for subscribing with ${email.value}!`)
    email.value = ''
  }
}

const handleImageError = (event) => {
  event.target.src = 'https://cdni.iconscout.com/illustration/premium/thumb/girl-working-on-laptop-2537387-2146478.png'
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionVisible.value = true
        }
      })
    },
    { threshold: 0.2, rootMargin: '0px' }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Section - SAME HEIGHT as before */
.nl-section {
  background: linear-gradient(135deg, #5138ee 0%, #7c3aed 100%);
  overflow: hidden;
  position: relative;
  padding: 3rem 0; /* Same padding */
  margin: 2rem 5% 0 5%;
  border-radius: 1.5rem;
  min-height: 320px; /* Same height */
}

.nl-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.nl-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  height: 100%;
}

/* Left content - UNCHANGED */
.nl-left-content {
  max-width: 28rem;
  margin-left: 3rem;
  opacity: 0;
  transform: translateX(-2rem);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nl-left-content.nl-fade-in {
  opacity: 1;
  transform: translateX(0);
}

.nl-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.375rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
  font-family: 'Poppins', sans-serif;
}

.nl-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
}

/* Form styles - UNCHANGED */
.nl-form {
  margin-bottom: 1.5rem;
}

.nl-input-wrapper {
  display: flex;
  background: white;
  border-radius: 0.75rem;
  padding: 0.25rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 420px;
}

.nl-email-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  color: #111927;
  background: transparent;
  border-radius: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.nl-email-input::placeholder {
  color: #6b7280;
}

.nl-submit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #1f2937;
  color: white;
  border: none;
  padding: 0.875rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;
}

.nl-submit-btn:hover {
  background: #111827;
  transform: translateY(-1px);
}

.nl-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.nl-submit-btn:hover .nl-arrow {
  transform: translateX(0.25rem);
}

/* Radio options - UNCHANGED */
.nl-options {
  display: flex;
  gap: 1.5rem;
}

.nl-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.nl-radio {
  display: none;
}

.nl-checkmark {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin-right: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.nl-checkmark::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.375rem;
  height: 0.375rem;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease;
}

.nl-radio:checked + .nl-checkmark {
  border-color: white;
}

.nl-radio:checked + .nl-checkmark::before {
  transform: translate(-50%, -50%) scale(1);
}

.nl-option-text {
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
}

/* Right content - Image taking FULL HEIGHT */
.nl-right-content {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(2rem);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
  height: 100%;
}

.nl-right-content.nl-fade-in-delay {
  opacity: 1;
  transform: translateX(0);
}

.nl-illustration-wrapper {
  position: relative;
  width: 100%;
  height: 320px; /* Full height of the section */
  display: flex;
  align-items: center;
  justify-content: center;
}

.nl-main-illustration {
  width: auto;
  height: 100%; /* Takes full height of wrapper (320px) */
  max-width: 400px; /* Maximum width constraint */
  object-fit: contain;
  z-index: 10;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
}

/* Decorative Elements positioned relative to full height */
.nl-decoration-stripes {
  position: absolute;
  width: 100px;
  height: 60px;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 3px,
    rgba(34, 211, 238, 0.4) 3px,
    rgba(34, 211, 238, 0.4) 6px
  );
  top: 20px;
  right: 20px;
  border-radius: 12px;
  z-index: 2;
}

.nl-decoration-dots {
  position: absolute;
  width: 60px;
  height: 40px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  bottom: 20px;
  left: 20px;
  z-index: 3;
}

/* Floating animation - UNCHANGED */
.nl-floating {
  animation: nl-float 6s ease-in-out infinite;
}

@keyframes nl-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* Responsive design */
@media (max-width: 1200px) {
  .nl-section {
    margin-left: 3%;
    margin-right: 3%;
  }
  
  .nl-left-content {
    margin-left: 2rem;
  }
}

@media (max-width: 768px) {
  .nl-section {
    margin-left: 2%;
    margin-right: 2%;
    padding: 2rem 0;
    min-height: 280px;
  }
  
  .nl-content-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .nl-left-content {
    margin-left: 0;
    max-width: 100%;
  }
  
  .nl-title {
    font-size: 2rem;
  }
  
  .nl-input-wrapper {
    flex-direction: column;
    gap: 0.5rem;
    max-width: 100%;
  }
  
  .nl-submit-btn {
    justify-content: center;
  }
  
  .nl-options {
    justify-content: center;
  }
  
  .nl-illustration-wrapper {
    height: 240px;
  }
}
</style>
