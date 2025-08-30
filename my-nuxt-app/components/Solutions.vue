<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white" ref="sectionRef">
    <div class="max-w-full mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16" ref="headerRef">
        <div class="inline-block bg-accentlight rounded-full px-6 py-2 mb-6 transform transition-all duration-[1200ms] ease-out"
             :class="headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <span class="text-accent font-brand font-brand-medium text-sm">Our Special Solutions</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-brand font-brand-bold text-text-primary mb-8 leading-tight transform transition-all duration-[1200ms] ease-out delay-200"
            :class="headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          We Customize Your Software to The
          <br class="hidden md:block">
          Smart Ways
        </h2>
      </div>

      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" ref="gridRef">
        <!-- Realtime Analytics -->
        <div class="group bg-white hover:bg-accent rounded-2xl p-8 border border-border hover:shadow-xl h-96 flex flex-col cursor-pointer text-center transform scroll-transition hover-fast"
             :class="cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
             :style="{ transitionDelay: cardsVisible ? '300ms' : '0ms' }">
          <!-- Background Decoration -->
          <div class="absolute top-4 left-4 w-16 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-200">
            <div class="flex space-x-1">
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
            </div>
            <div class="flex space-x-1 mt-1 ml-2">
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
              <div class="w-1 h-1 bg-accent group-hover:bg-white rounded-full transition-colors duration-200"></div>
            </div>
          </div>

          <!-- Icon -->
          <div class="mb-6 relative z-10 flex justify-center">
            <div class="w-16 h-16 bg-accentlight group-hover:bg-white group-hover:bg-opacity-20 rounded-xl flex items-center justify-center transition-all duration-200 ease-in-out">
              <!-- Analytics Icon -->
              <svg class="w-8 h-8 text-accent group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                <circle cx="18" cy="8" r="3" stroke="currentColor" stroke-width="2" fill="none" />
              </svg>
            </div>
          </div>

          <h3 class="text-xl font-brand font-brand-semibold text-text-primary group-hover:text-white mb-4 transition-colors duration-200 ease-in-out">
            Realtime Analytics
          </h3>
          
          <p class="text-text-secondary group-hover:text-white group-hover:text-opacity-90 font-brand mb-8 leading-relaxed flex-grow transition-colors duration-200 ease-in-out">
            Sed ut perspiciatis unde omnis natus error voluptatem accusaente dolorem laudantium totam
          </p>

          <!-- Learn More Button -->
          <button class="w-full bg-accent group-hover:bg-white text-white group-hover:text-accent font-brand font-brand-medium py-3 px-6 rounded-lg transition-all duration-200 ease-in-out flex items-center justify-center space-x-2 transform hover:scale-105">
            <span>Learn More</span>
            <svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Media Friendly -->
        <div class="group bg-white hover:bg-accent rounded-2xl p-8 border border-border hover:shadow-xl h-96 flex flex-col cursor-pointer text-center transform scroll-transition hover-fast"
             :class="cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
             :style="{ transitionDelay: cardsVisible ? '450ms' : '0ms' }">
          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="w-16 h-16 bg-accentlight group-hover:bg-white group-hover:bg-opacity-20 rounded-xl flex items-center justify-center transition-all duration-200 ease-in-out">
              <!-- Growth Chart Icon -->
              <svg class="w-8 h-8 text-accent group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2 2m-2-2v6" />
              </svg>
            </div>
          </div>

          <h3 class="text-xl font-brand font-brand-semibold text-text-primary group-hover:text-white mb-4 transition-colors duration-200 ease-in-out">
            Media Friendly
          </h3>
          
          <p class="text-text-secondary group-hover:text-white group-hover:text-opacity-90 font-brand mb-8 leading-relaxed flex-grow transition-colors duration-200 ease-in-out">
            Sed ut perspiciatis unde omnis natus error voluptatem accusaente dolorem laudantium totam
          </p>

          <!-- Learn More Button -->
          <button class="w-full bg-accent group-hover:bg-white text-white group-hover:text-accent font-brand font-brand-medium py-3 px-6 rounded-lg transition-all duration-200 ease-in-out flex items-center justify-center space-x-2 transform hover:scale-105">
            <span>Learn More</span>
            <svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Fast and Intuitive -->
        <div class="group bg-white hover:bg-accent rounded-2xl p-8 border border-border hover:shadow-xl h-96 flex flex-col cursor-pointer text-center transform scroll-transition hover-fast"
             :class="cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
             :style="{ transitionDelay: cardsVisible ? '600ms' : '0ms' }">
          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="w-16 h-16 bg-accentlight group-hover:bg-white group-hover:bg-opacity-20 rounded-xl flex items-center justify-center transition-all duration-200 ease-in-out">
              <!-- Speed/Clock Icon -->
              <svg class="w-8 h-8 text-accent group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4l-2-2M16 4l2-2M4 12H2M22 12h-2" />
              </svg>
            </div>
          </div>

          <h3 class="text-xl font-brand font-brand-semibold text-text-primary group-hover:text-white mb-4 transition-colors duration-200 ease-in-out">
            Fast and Intuitive
          </h3>
          
          <p class="text-text-secondary group-hover:text-white group-hover:text-opacity-90 font-brand mb-8 leading-relaxed flex-grow transition-colors duration-200 ease-in-out">
            Sed ut perspiciatis unde omnis natus error voluptatem accusaente dolorem laudantium totam
          </p>

          <!-- Learn More Button -->
          <button class="w-full bg-accent group-hover:bg-white text-white group-hover:text-accent font-brand font-brand-medium py-3 px-6 rounded-lg transition-all duration-200 ease-in-out flex items-center justify-center space-x-2 transform hover:scale-105">
            <span>Learn More</span>
            <svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Well Integrated -->
        <div class="group bg-white hover:bg-accent rounded-2xl p-8 border border-border hover:shadow-xl relative h-96 flex flex-col cursor-pointer text-center transform scroll-transition hover-fast"
             :class="cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
             :style="{ transitionDelay: cardsVisible ? '750ms' : '0ms' }">
          <!-- Decorative Plus -->
          <div class="absolute top-6 right-6 text-accent group-hover:text-white opacity-20 transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>

          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="w-16 h-16 bg-accentlight group-hover:bg-white group-hover:bg-opacity-20 rounded-xl flex items-center justify-center transition-all duration-200 ease-in-out">
              <!-- Integration Icon -->
              <svg class="w-8 h-8 text-accent group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4l-2-2M16 4l2-2M4 12H2M22 12h-2" />
              </svg>
            </div>
          </div>

          <h3 class="text-xl font-brand font-brand-semibold text-text-primary group-hover:text-white mb-4 transition-colors duration-200 ease-in-out">
            Well Integrated
          </h3>
          
          <p class="text-text-secondary group-hover:text-white group-hover:text-opacity-90 font-brand mb-8 leading-relaxed flex-grow transition-colors duration-200 ease-in-out">
            Sed ut perspiciatis unde omnis natus error voluptatem accusaente dolorem laudantium totam
          </p>

          <!-- Learn More Button -->
          <button class="w-full bg-accent group-hover:bg-white text-white group-hover:text-accent font-brand font-brand-medium py-3 px-6 rounded-lg transition-all duration-200 ease-in-out flex items-center justify-center space-x-2 transform hover:scale-105">
            <span>Learn More</span>
            <svg class="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
<!-- Floating Action Button (Bottom Right) -->
<!-- Floating Action Button (Bottom Right) -->
<!-- Floating Action Button (Bottom Right) -->
<div class="fixed bottom-8 right-8 z-50">
  <button @click="scrollToTop" class="w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out flex items-center justify-center hover:scale-110 group">
    <svg class="w-6 h-6 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  </button>
</div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Animation state
const headerVisible = ref(false)
const cardsVisible = ref(false)
const sectionRef = ref(null)
const headerRef = ref(null)
const gridRef = ref(null)

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Intersection Observer for scroll animations
let headerObserver = null
let gridObserver = null

onMounted(() => {
  // Header animation observer
  headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerVisible.value = true
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px'
    }
  )

  // Grid animation observer
  gridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardsVisible.value = true
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px'
    }
  )

  if (headerRef.value) {
    headerObserver.observe(headerRef.value)
  }

  if (gridRef.value) {
    gridObserver.observe(gridRef.value)
  }
})

onUnmounted(() => {
  if (headerObserver) {
    headerObserver.disconnect()
  }
  if (gridObserver) {
    gridObserver.disconnect()
  }
})
</script>
<style scoped>
/* Ensure smooth hardware acceleration */
.transform {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Separate scroll and hover transitions */
.scroll-transition {
  transition: opacity 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hover-fast:hover {
  transition: all 200ms ease-in-out !important;
}

/* Custom smooth easing curves */
.ease-out {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
