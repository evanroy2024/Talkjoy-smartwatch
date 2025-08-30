<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" ref="sectionRef">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        
        <!-- Left Side - Large Image (Slides in from left) -->
        <div class="flex justify-center lg:justify-start transform transition-all duration-[1200ms] ease-out"
             :class="leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'"
             ref="leftContentRef">
          
          <div class="relative w-full max-w-lg">
            <!-- Main Image Container -->
            <div class="bg-gray-300 rounded-2xl w-full h-[500px] flex items-center justify-center shadow-2xl transform transition-all duration-1000 ease-out delay-200"
                 :class="leftVisible ? 'scale-100 rotate-0' : 'scale-95 -rotate-2'">
              
              <!-- Using online placeholder image service -->
              <img 
                src="https://picsum.photos/500/500?random=1" 
                alt="Software Experience" 
                class="w-full h-full object-cover rounded-2xl transform transition-all duration-1000 ease-out delay-300"
                :class="leftVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'"
              />
              
              <!-- Overlay for the large text -->
              <div class="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center">
                <h3 class="text-8xl md:text-9xl font-brand font-brand-bold text-white drop-shadow-lg transform transition-all duration-1000 ease-out delay-500"
                    :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
                  747X745
                </h3>
              </div>
            </div>

            <!-- Floating Decorative Elements -->
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full shadow-lg transform transition-all duration-1000 ease-out delay-600"
                 :class="leftVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'"></div>
            
            <div class="absolute -bottom-6 -left-6 w-8 h-8 bg-accentlight rounded-full shadow-md transform transition-all duration-1000 ease-out delay-700"
                 :class="leftVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"></div>

            <!-- Decorative Pattern -->
            <div class="absolute top-12 -left-12 opacity-30 transform transition-all duration-1000 ease-out delay-400"
                 :class="leftVisible ? 'opacity-30 translate-x-0' : 'opacity-0 -translate-x-8'">
              <div class="grid grid-cols-4 gap-3">
                <div v-for="i in 12" :key="i" 
                     class="w-3 h-3 bg-accent rounded-full transform transition-all duration-500 ease-out"
                     :style="{ transitionDelay: `${800 + i * 50}ms` }"
                     :class="leftVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Text Content (Slides in from right) -->
        <div class="space-y-8 transform transition-all duration-[1200ms] ease-out"
             :class="rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'"
             ref="rightContentRef">
          
          <!-- Header Badge -->
          <div class="transform transition-all duration-1000 ease-out delay-200"
               :class="rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <div class="inline-block bg-accentlight rounded-full px-6 py-2">
              <span class="text-accent font-brand font-brand-medium text-sm">What We Provides</span>
            </div>
          </div>

          <!-- Main Heading -->
          <div class="transform transition-all duration-1000 ease-out delay-300"
               :class="rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-brand font-brand-bold text-text-primary leading-tight">
              User Friendly Experience
              <br class="hidden md:block">
              For Your Attendies
            </h2>
          </div>

          <!-- Description -->
          <div class="transform transition-all duration-1000 ease-out delay-400"
               :class="rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <p class="text-text-secondary font-brand text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia 
              consequuntur magni dolores eos qui ratione voluptatem
            </p>
          </div>

          <!-- Features List -->
          <div class="space-y-4">
            <div v-for="(feature, index) in features" :key="index"
                 class="flex items-center space-x-4 transform transition-all duration-1000 ease-out"
                 :class="rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
                 :style="{ transitionDelay: `${500 + index * 100}ms` }">
              <div class="flex-shrink-0">
                <div class="w-6 h-6 bg-accent rounded-full flex items-center justify-center transform transition-all duration-500 ease-out"
                     :style="{ transitionDelay: `${600 + index * 100}ms` }"
                     :class="rightVisible ? 'scale-100' : 'scale-0'">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span class="text-text-secondary font-brand text-lg">{{ feature }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="transform transition-all duration-1000 ease-out delay-800"
               :class="rightVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'">
            <button class="bg-accent hover:bg-opacity-90 text-white font-brand font-brand-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center space-x-2 hover:scale-105 hover:shadow-xl group">
              <span>Get Started</span>
              <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Animation states
const leftVisible = ref(false)
const rightVisible = ref(false)
const sectionRef = ref(null)
const leftContentRef = ref(null)
const rightContentRef = ref(null)

// Features data
const features = [
  "30-day free trial of our premium plan",
  "100% Free - No payments required", 
  "Lifetime Upgrade"
]

// Intersection Observers
let leftObserver = null
let rightObserver = null

onMounted(() => {
  // Left image observer
  leftObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          leftVisible.value = true
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px'
    }
  )

  // Right content observer  
  rightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Slight delay for staggered effect
          setTimeout(() => {
            rightVisible.value = true
          }, 300)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px'
    }
  )

  if (leftContentRef.value) {
    leftObserver.observe(leftContentRef.value)
  }

  if (rightContentRef.value) {
    rightObserver.observe(rightContentRef.value)
  }
})

onUnmounted(() => {
  if (leftObserver) {
    leftObserver.disconnect()
  }
  if (rightObserver) {
    rightObserver.disconnect()
  }
})
</script>

<style scoped>
/* Ensure smooth hardware acceleration */
.transform {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Custom easing curves */
.ease-out {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Prevent horizontal scroll during animations */
.overflow-hidden {
  overflow-x: hidden;
}

/* Image hover effect */
img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
