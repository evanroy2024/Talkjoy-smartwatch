<template>
  <section id="testimonial-section" class="ts-section" ref="sectionRef">
    <div class="ts-container">
      <div class="ts-content-wrapper">
        
        <!-- Left Content - Gray Placeholder with Circular Dot Background -->
        <div class="ts-left-content" :class="sectionVisible ? 'ts-fade-in' : ''">
          <div class="ts-placeholder-box">
            <span class="ts-placeholder-text">615X644</span>
          </div>
        </div>

        <!-- Right Content - Testimonial -->
        <div class="ts-right-content" :class="sectionVisible ? 'ts-fade-in-delay' : ''">
          <div class="ts-badge">Clients Feedback</div>
          <h2 class="ts-title">
            What Our Customer's Say
            <br>
            About Solutions
          </h2>
          
          <!-- User Info with Avatar -->
          <div class="ts-user-section">
            <div class="ts-user-avatar">
              <span class="ts-quote-number">99</span>
            </div>
            <div class="ts-user-details">
              <h3 class="ts-user-name">{{ currentTestimonial.name }}</h3>
              <p class="ts-user-role">{{ currentTestimonial.role }}</p>
            </div>
          </div>
          
          <!-- Testimonial Text -->
          <div class="ts-testimonial-text">
            <p>{{ currentTestimonial.text }}</p>
          </div>
        </div>
      </div>
      
      <!-- Navigation Dots - Bottom Center -->
      <div class="ts-dots-navigation">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="setActiveTestimonial(index)"
          :class="[
            'ts-dot',
            activeTestimonial === index ? 'ts-dot-active' : ''
          ]"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Component state
const activeTestimonial = ref(0)
const sectionVisible = ref(false)
const sectionRef = ref(null)

// Testimonials data
const testimonials = [
  {
    name: 'Rhonda R. Croft',
    role: 'Senior Manager',
    text: 'Sunxplica nemo enim ipsam voluptatem quia Sed ut perspiciatis unde omnis iste natus errors voluptatem accusantium doloremque laudantiums totam rem aperiam eaque ipsaque abtore verita tis et quasi architecto beatae vitae dicta'
  },
  {
    name: 'John Anderson',
    role: 'Product Manager',
    text: 'Outstanding service and professional approach. The team exceeded our expectations and delivered exactly what we needed for our business growth and development.'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    text: 'Exceptional quality and attention to detail. Their solutions have significantly improved our operational efficiency and customer satisfaction rates.'
  },
  {
    name: 'Michael Thompson',
    role: 'CEO',
    text: 'Highly professional team with innovative solutions. Working with them has been transformative for our organization. Highly recommended for any business.'
  }
]

// Computed property for current testimonial
const currentTestimonial = computed(() => testimonials[activeTestimonial.value])

// Methods
const setActiveTestimonial = (index) => {
  activeTestimonial.value = index
}

// Auto-rotate testimonials
let autoRotateInterval = null

onMounted(() => {
  // Intersection observer for scroll animations
  const observer = new IntersectionObserver(
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

  // Auto-rotate testimonials every 5 seconds
  autoRotateInterval = setInterval(() => {
    activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length
  }, 5000)
})

onUnmounted(() => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval)
  }
})
</script>

<style scoped>
/* Section - Clean, no background */
.ts-section {
  padding: 5rem 0;
  margin: 0 5%; /* 5% margins */
  position: relative;
}

.ts-container {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

.ts-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  min-height: 500px;
  margin-bottom: 3rem;
}

/* Left Content - Gray Placeholder with Perfect Circular Dot Pattern */
.ts-left-content {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-3rem);
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.ts-left-content.ts-fade-in {
  opacity: 1;
  transform: translateX(0);
}

.ts-placeholder-box {
  width: 100%;
  max-width: 450px;
  height: 500px;
  background: #d1d5db;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

/* Perfect Circular Dot Pattern Background */
.ts-placeholder-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: 
    radial-gradient(circle, rgba(0, 0, 0, 0.15) 1.5px, transparent 2px),
    radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1.5px);
  background-position: 
    0 0, 
    25px 25px;
  background-size: 50px 50px, 50px 50px;
  background-repeat: repeat;
  z-index: 1;
  pointer-events: none;
}

.ts-placeholder-text {
  font-size: 4rem;
  font-weight: 800;
  color: #374151;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
  position: relative;
}

/* Right Content - Testimonial */
.ts-right-content {
  max-width: 40rem;
  opacity: 0;
  transform: translateX(3rem);
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
}

.ts-right-content.ts-fade-in-delay {
  opacity: 1;
  transform: translateX(0);
}

.ts-badge {
  display: inline-block;
  background: #e0e7ff;
  color: #5138ee;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

.ts-title {
  font-size: 3.25rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.15;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
}

/* User Section */
.ts-user-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.ts-user-avatar {
  width: 70px;
  height: 70px;
  background: #5138ee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ts-quote-number {
  font-size: 1.75rem;
  color: white;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
}

.ts-user-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
  font-family: 'Poppins', sans-serif;
}

.ts-user-role {
  font-size: 1rem;
  color: #5138ee;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

/* Testimonial Text */
.ts-testimonial-text {
  margin-bottom: 2rem;
}

.ts-testimonial-text p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
  transition: all 0.6s ease;
}

/* Navigation Dots - Bottom Center */
.ts-dots-navigation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.ts-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d1d5db;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ts-dot:hover {
  background: #9ca3af;
  transform: scale(1.2);
}

.ts-dot-active {
  background: #5138ee;
  transform: scale(1.3);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .ts-section {
    margin: 0 3%;
  }
  
  .ts-content-wrapper {
    gap: 4rem;
  }
  
  .ts-title {
    font-size: 2.75rem;
  }
}

@media (max-width: 768px) {
  .ts-section {
    margin: 0 2%;
    padding: 3rem 0;
  }
  
  .ts-content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .ts-title {
    font-size: 2.25rem;
  }
  
  .ts-placeholder-box {
    height: 350px;
    max-width: 350px;
    margin: 0 auto;
  }
  
  .ts-placeholder-text {
    font-size: 3rem;
  }
  
  .ts-user-section {
    justify-content: center;
  }
}
</style>
