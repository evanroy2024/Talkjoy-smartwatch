<template>
  <section 
    ref="sectionRef" 
    class="relative py-20 bg-accent text-white overflow-hidden" 
    :class="animationClasses"
  >
    <!-- Decorative Background Dots Only -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Clean dot pattern background -->
      <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.4)_2px,transparent_2px)] bg-[size:40px_40px] opacity-60"></div>
    </div>

    <div class="relative z-10 max-w-none mx-auto px-16 text-center">
      <!-- Header -->
      <div class="mb-16" :class="headerAnimationClasses">
        <span class="inline-block bg-white bg-opacity-20 px-4 py-2 rounded text-sm font-semibold tracking-wider uppercase mb-6">Our Special Solutions</span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-brand-bold leading-tight max-w-4xl mx-auto">We Customize Your Software to The Smart Ways</h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto" :class="gridAnimationClasses">
        <!-- Software Model -->
        <div class="flex flex-col items-center text-center space-y-6" :class="cardAnimationClasses1">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <!-- Compass/Navigation Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-brand-bold">Software Model</h3>
          <p class="text-base leading-relaxed max-w-xs opacity-90">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque</p>
          <a href="#" class="inline-flex items-center font-semibold underline hover:text-gray-200 transition-colors">
            Learn More <span class="ml-2">&rarr;</span>
          </a>
        </div>

        <!-- Network Wired -->
        <div class="flex flex-col items-center text-center space-y-6" :class="cardAnimationClasses2">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <!-- Map/Network Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-brand-bold">Network Wired</h3>
          <p class="text-base leading-relaxed max-w-xs opacity-90">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque</p>
          <a href="#" class="inline-flex items-center font-semibold underline hover:text-gray-200 transition-colors">
            Learn More <span class="ml-2">&rarr;</span>
          </a>
        </div>

        <!-- Final Testylization -->
        <div class="flex flex-col items-center text-center space-y-6" :class="cardAnimationClasses3">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <!-- Shield Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-2xl font-brand-bold">Final Testylization</h3>
          <p class="text-base leading-relaxed max-w-xs opacity-90">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque</p>
          <a href="#" class="inline-flex items-center font-semibold underline hover:text-gray-200 transition-colors">
            Learn More <span class="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)
const headerVisible = ref(false)
const gridVisible = ref(false)
const card1Visible = ref(false)
const card2Visible = ref(false)
const card3Visible = ref(false)

let observer = null

// Computed classes for smooth animations
const animationClasses = computed(() => ({
  'animate-fade-in-up': isVisible.value,
  'opacity-0 translate-y-16': !isVisible.value,
  'opacity-100 translate-y-0': isVisible.value,
  'transition-all duration-1000 ease-out': true
}))

const headerAnimationClasses = computed(() => ({
  'animate-fade-in-up-delay-200': headerVisible.value,
  'opacity-0 translate-y-12': !headerVisible.value,
  'opacity-100 translate-y-0': headerVisible.value,
  'transition-all duration-1000 ease-out delay-200': true
}))

const gridAnimationClasses = computed(() => ({
  'animate-fade-in-up-delay-400': gridVisible.value,
  'opacity-0 translate-y-8': !gridVisible.value,
  'opacity-100 translate-y-0': gridVisible.value,
  'transition-all duration-1000 ease-out delay-400': true
}))

const cardAnimationClasses1 = computed(() => ({
  'animate-card-fade-in': card1Visible.value,
  'opacity-0 translate-y-8 scale-95': !card1Visible.value,
  'opacity-100 translate-y-0 scale-100': card1Visible.value,
  'transition-all duration-800 ease-out delay-600': true
}))

const cardAnimationClasses2 = computed(() => ({
  'animate-card-fade-in': card2Visible.value,
  'opacity-0 translate-y-8 scale-95': !card2Visible.value,
  'opacity-100 translate-y-0 scale-100': card2Visible.value,
  'transition-all duration-800 ease-out delay-800': true
}))

const cardAnimationClasses3 = computed(() => ({
  'animate-card-fade-in': card3Visible.value,
  'opacity-0 translate-y-8 scale-95': !card3Visible.value,
  'opacity-100 translate-y-0 scale-100': card3Visible.value,
  'transition-all duration-800 ease-out delay-1000': true
}))

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animations in sequence
          setTimeout(() => {
            isVisible.value = true
          }, 100)
          
          setTimeout(() => {
            headerVisible.value = true
          }, 300)
          
          setTimeout(() => {
            gridVisible.value = true
          }, 500)
          
          setTimeout(() => {
            card1Visible.value = true
          }, 700)
          
          setTimeout(() => {
            card2Visible.value = true
          }, 900)
          
          setTimeout(() => {
            card3Visible.value = true
          }, 1100)
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -100px 0px' // Start animation slightly before element is fully visible
    }
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
/* Custom smooth animations */
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-fade-in-up-delay-200 {
  animation: fadeInUp 1s ease-out 0.2s forwards;
}

.animate-fade-in-up-delay-400 {
  animation: fadeInUp 1s ease-out 0.4s forwards;
}

.animate-card-fade-in {
  animation: cardFadeIn 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(1.5rem) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Ensure smooth transitions */
.transition-all {
  transition-property: all;
}

.duration-1000 {
  transition-duration: 1000ms;
}

.duration-800 {
  transition-duration: 800ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-400 {
  transition-delay: 400ms;
}

.delay-600 {
  transition-delay: 600ms;
}

.delay-800 {
  transition-delay: 800ms;
}

.delay-1000 {
  transition-delay: 1000ms;
}
</style>
