<template>
  <section id="custom-reports-tabs-section" class="crt-section" ref="sectionRef">
    <div class="crt-container">
      
      <!-- Header -->
      <div class="crt-header" :class="sectionVisible ? 'crt-fade-in' : ''">
        <span class="crt-badge">Services We Provide</span>
        <h2 class="crt-title">
          Custom Made Reports to Make
          <br class="crt-break">
          Great Decisions
        </h2>
      </div>

      <!-- Tabs Navigation - Much Wider -->
      <nav class="crt-tab-nav" :class="sectionVisible ? 'crt-fade-in-delay' : ''">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          @click="setActiveTab(index)"
          :class="[
            'crt-tab-btn',
            activeTab === index ? 'crt-tab-active' : ''
          ]"
        >
          {{ tab.name }}
        </button>
      </nav>

      <!-- Tab Content with 5% margins -->
      <div class="crt-content-wrapper">
        <Transition name="crt-slide-fade" mode="out-in">
          <div :key="activeTab" class="crt-tab-content">
            
            <!-- Left Content -->
            <div class="crt-left-content">
              <h3 class="crt-content-title">
                {{ tabs[activeTab].content.heading }}
              </h3>
              
              <p class="crt-content-desc">
                {{ tabs[activeTab].content.description }}
              </p>

              <!-- Features List -->
              <ul class="crt-features-list">
                <li 
                  v-for="(feature, index) in tabs[activeTab].content.features" 
                  :key="index"
                  class="crt-feature-item"
                >
                  <svg class="crt-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <button class="crt-read-more-btn">
                <span>Read More</span>
                <svg class="crt-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Right Content - Image -->
            <div class="crt-right-content">
              <div class="crt-image-container crt-floating">
                <div class="crt-image-placeholder">
                  <span class="crt-overlay-text">798X505</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Component state
const activeTab = ref(0)
const sectionVisible = ref(false)
const sectionRef = ref(null)

// Tab data
const tabs = [
  {
    id: 'crt-design',
    name: 'Design & Development',
    content: {
      heading: 'Creative Designer Professional Developer Are Made Easy',
      description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
      features: [
        '30-day free trial of our premium plan',
        '100% Free - No payments required',
        'Lifetime Upgrade'
      ]
    }
  },
  {
    id: 'crt-software',
    name: 'Software & Equipments',
    content: {
      heading: 'Advanced Software Solutions for Modern Business',
      description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
      features: [
        'Cloud-based infrastructure setup',
        'Enterprise-grade security protocols',
        'Scalable architecture design'
      ]
    }
  },
  {
    id: 'crt-team',
    name: 'Team Members & Tools',
    content: {
      heading: 'Collaborative Team Environment with Premium Tools',
      description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
      features: [
        'Expert team collaboration features',
        'Advanced project management tools',
        'Real-time performance tracking'
      ]
    }
  },
  {
    id: 'crt-market',
    name: 'Market Analysis',
    content: {
      heading: 'Data-Driven Market Insights and Strategic Analytics',
      description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
      features: [
        'Comprehensive market research reports',
        'Competitive landscape analysis',
        'Future trend forecasting models'
      ]
    }
  },
  {
    id: 'crt-activity',
    name: 'User Activity',
    content: {
      heading: 'Advanced User Engagement and Activity Monitoring',
      description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
      features: [
        'Real-time user activity tracking',
        'Behavioral pattern analysis',
        'Engagement optimization metrics'
      ]
    }
  }
]

// Methods
const setActiveTab = (index) => {
  activeTab.value = index
}

// Intersection Observer
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
/* Section wrapper */
.crt-section {
  padding: 4rem 1rem;
  background: #ffffff;
  overflow: hidden;
}

.crt-container {
  max-width: 100rem; /* Even wider container */
  margin: 0 auto;
}

/* Header styles */
.crt-header {
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(2rem);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.crt-header.crt-fade-in {
  opacity: 1;
  transform: translateY(0);
}

.crt-badge {
  display: inline-block;
  background: #e0e7ff;
  color: #6366f1;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.crt-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin: 0;
}

.crt-break {
  display: block;
}

/* Tab navigation - MUCH WIDER */
.crt-tab-nav {
  display: flex;
  justify-content: center;
  gap: 2rem; /* Increased gap */
  max-width: 95rem; /* Much wider */
  margin: 0 auto 3rem auto;
  padding: 1rem 4rem; /* More padding */
  opacity: 0;
  transform: translateY(2rem);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
  white-space: nowrap;
  overflow-x: auto;
  background: #f8fafc;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.crt-tab-nav.crt-fade-in-delay {
  opacity: 1;
  transform: translateY(0);
}

.crt-tab-btn {
  padding: 1rem 2.5rem; /* More padding for wider tabs */
  border: none;
  background: transparent;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  white-space: nowrap;
  font-size: 1rem; /* Standard size */
  min-width: 200px; /* Minimum width per tab */
}

.crt-tab-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #6366f1;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.crt-tab-btn:hover {
  color: #6366f1;
  background: #f1f5f9;
}

.crt-tab-active {
  color: #6366f1;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
}

.crt-tab-active::before {
  transform: scaleX(1);
}

/* Content wrapper with 5% margins */
.crt-content-wrapper {
  margin-left: 5%; /* 5% left margin */
  margin-right: 5%; /* 5% right margin */
  min-height: 32rem;
  position: relative;
}

.crt-tab-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Left content */
.crt-left-content {
  max-width: 45rem; /* Increased since we have more space */
}

.crt-content-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.crt-content-desc {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.crt-features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.crt-feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #374151;
}

.crt-check-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #6366f1;
  background: #6366f1;
  padding: 0.125rem;
  border-radius: 50%;
  stroke: white;
  flex-shrink: 0;
}

.crt-read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border: 2px solid #6366f1;
  background: transparent;
  color: #6366f1;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.crt-read-more-btn:hover {
  background: #6366f1;
  color: white;
  transform: translateY(-2px);
}

.crt-arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.crt-read-more-btn:hover .crt-arrow-icon {
  transform: translateX(0.25rem);
}

/* Right content - Image placeholder */
.crt-right-content {
  display: flex;
  justify-content: center;
}

.crt-image-container {
  position: relative;
  width: 100%;
  max-width: 50rem; /* Increased size */
  height: 32rem; /* Increased height */
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.crt-image-placeholder {
  width: 100%;
  height: 100%;
  background: #d1d5db;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crt-overlay-text {
  font-size: 5rem; /* Larger text */
  font-weight: 800;
  color: #374151;
}

/* Floating animation */
.crt-floating {
  animation: crt-float 6s ease-in-out infinite;
}

@keyframes crt-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(0.5deg);
  }
}

/* Tab content transitions */
.crt-slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.crt-slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.crt-slide-fade-enter-from {
  opacity: 0;
  transform: translateX(2rem);
}

.crt-slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}

/* Mobile responsive */
@media (max-width: 1200px) {
  .crt-content-wrapper {
    margin-left: 3%;
    margin-right: 3%;
  }
  
  .crt-tab-nav {
    max-width: 80rem;
    padding: 1rem 2rem;
    gap: 1rem;
  }
  
  .crt-tab-btn {
    min-width: 160px;
    padding: 0.875rem 2rem;
  }
}

@media (max-width: 768px) {
  .crt-content-wrapper {
    margin-left: 2%;
    margin-right: 2%;
  }
  
  .crt-tab-nav {
    gap: 0.5rem;
    padding: 1rem;
    max-width: 100%;
  }
  
  .crt-tab-btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
    min-width: 140px;
  }
  
  .crt-tab-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .crt-content-title {
    font-size: 2rem;
  }
  
  .crt-title {
    font-size: 2rem;
  }

  .crt-image-container {
    max-width: 100%;
    height: 20rem;
  }
  
  .crt-overlay-text {
    font-size: 3rem;
  }
}

/* Large screens */
@media (min-width: 1400px) {
  .crt-container {
    max-width: 110rem;
  }
  
  .crt-tab-nav {
    max-width: 100rem;
  }
}
</style>
