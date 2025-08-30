<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" ref="sectionRef">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[700px]">
        
        <!-- Left Side - Content -->
        <div class="space-y-8 transform transition-all duration-[1200ms] ease-out"
             :class="leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'"
             ref="leftContentRef">
          
          <!-- Header Badge -->
          <div class="transform transition-all duration-1000 ease-out delay-200"
               :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <div class="inline-block bg-accentlight rounded-full px-6 py-2">
              <span class="text-accent font-brand font-brand-medium text-sm">Core Features</span>
            </div>
          </div>

          <!-- Main Heading -->
          <div class="transform transition-all duration-1000 ease-out delay-300"
               :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-brand font-brand-bold text-text-primary leading-tight">
              Features Help You Build Better
              <br>
              Software.
            </h2>
          </div>

          <!-- Features Grid (2x2) - With descriptions visible -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mt-12 max-w-2xl">
            
            <!-- Feature 1: Advanced Tracking -->
            <div class="transform transition-all duration-1000 ease-out delay-400"
                 :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accentlight rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-brand font-brand-semibold text-text-primary mb-2">
                    Advanced Tracking
                  </h3>
                  <p class="text-text-secondary font-brand text-sm leading-relaxed">
                    Sed ut perspiciatis unde omniste accsantium doloremque
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 2: Marketing Analysis -->
            <div class="transform transition-all duration-1000 ease-out delay-500"
                 :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accentlight rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-brand font-brand-semibold text-text-primary mb-2">
                    Marketing Analysis
                  </h3>
                  <p class="text-text-secondary font-brand text-sm leading-relaxed">
                    Sed ut perspiciatis unde omniste accsantium doloremque
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 3: In-depth Monitoring -->
            <div class="transform transition-all duration-1000 ease-out delay-600"
                 :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accentlight rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-brand font-brand-semibold text-text-primary mb-2">
                    In-depth Monitoring
                  </h3>
                  <p class="text-text-secondary font-brand text-sm leading-relaxed">
                    Sed ut perspiciatis unde omniste accsantium doloremque
                  </p>
                </div>
              </div>
            </div>

            <!-- Feature 4: Quality First Reliability -->
            <div class="transform transition-all duration-1000 ease-out delay-700"
                 :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accentlight rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-brand font-brand-semibold text-text-primary mb-2">
                    Quality First Reliability
                  </h3>
                  <p class="text-text-secondary font-brand text-sm leading-relaxed">
                    Sed ut perspiciatis unde omniste accsantium doloremque
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-8 transform transition-all duration-1000 ease-out delay-800"
               :class="leftVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'">
            <button class="border-2 border-accent text-accent hover:bg-accent hover:text-white font-brand font-brand-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center space-x-2 hover:scale-105 group">
              <span>Get Started</span>
              <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Side - Perfectly Positioned Overlapping Images -->
        <div class="relative w-full h-[600px] transform transition-all duration-[1200ms] ease-out"
             :class="rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'"
             ref="rightContentRef">
          
          <!-- Main Large Image (332X345) - Background, top-right position -->
          <div class="absolute top-8 right-0 w-80 h-72 bg-gray-400 rounded-3xl shadow-2xl floating-1 z-10 transform transition-all duration-1000 ease-out delay-200"
               :class="rightVisible ? 'scale-100 rotate-0' : 'scale-90 rotate-1'">
            <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-3xl flex items-center justify-center">
              <span class="text-5xl font-brand font-brand-bold text-gray-700">
                332X345
              </span>
            </div>
          </div>

          <!-- Tall Left Image (287X453) - Overlapping from left -->
          <div class="absolute top-0 left-8 w-64 h-80 bg-gray-500 rounded-3xl shadow-xl floating-2 z-20 transform transition-all duration-1000 ease-out delay-400"
               :class="rightVisible ? 'scale-100 rotate-0' : 'scale-85 -rotate-2'">
            <div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl flex items-center justify-center">
              <span class="text-4xl font-brand font-brand-bold text-white drop-shadow-lg">
                287X453
              </span>
            </div>
          </div>

          <!-- Small Top-Right Image (170X170) - Overlapping main image -->
          <div class="absolute top-0 right-12 w-36 h-32 bg-gray-300 rounded-2xl shadow-lg floating-3 z-30 transform transition-all duration-1000 ease-out delay-600"
               :class="rightVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-3'">
            <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center">
              <span class="text-lg font-brand font-brand-bold text-gray-700">
                170X170
              </span>
            </div>
          </div>

          <!-- Bottom Right Image (257X242) - Overlapping main image bottom -->
          <div class="absolute bottom-16 right-4 w-60 h-48 bg-gray-600 rounded-2xl shadow-xl floating-4 z-15 transform transition-all duration-1000 ease-out delay-800"
               :class="rightVisible ? 'scale-100 rotate-0' : 'scale-80 -rotate-1'">
            <div class="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center">
              <span class="text-3xl font-brand font-brand-bold text-white drop-shadow-lg">
                257X242
              </span>
            </div>
          </div>

          <!-- Bottom Left Small Image (217X232) - Overlapping tall image -->
          <div class="absolute bottom-4 left-20 w-48 h-40 bg-gray-700 rounded-2xl shadow-lg floating-5 z-25 transform transition-all duration-1000 ease-out delay-1000"
               :class="rightVisible ? 'scale-100 rotate-0' : 'scale-70 rotate-2'">
            <div class="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center">
              <span class="text-2xl font-brand font-brand-bold text-white drop-shadow-lg">
                217X232
              </span>
            </div>
          </div>

          <!-- Orange Dot (Bottom Right Corner) -->
          <div class="absolute bottom-2 right-2 w-6 h-6 bg-orange-400 rounded-full shadow-lg floating-dot z-40 transform transition-all duration-1000 ease-out delay-1200"
               :class="rightVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"></div>
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

// Intersection Observers
let leftObserver = null
let rightObserver = null

onMounted(() => {
  leftObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          leftVisible.value = true
        }
      })
    },
    { threshold: 0.2, rootMargin: '0px' }
  )

  rightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            rightVisible.value = true
          }, 400)
        }
      })
    },
    { threshold: 0.2, rootMargin: '0px' }
  )

  if (leftContentRef.value) leftObserver.observe(leftContentRef.value)
  if (rightContentRef.value) rightObserver.observe(rightContentRef.value)
})

onUnmounted(() => {
  if (leftObserver) leftObserver.disconnect()
  if (rightObserver) rightObserver.disconnect()
})
</script>

<style scoped>
/* Hardware acceleration */
.transform {
  transform: translateZ(0);
  will-change: transform, opacity;
}

.ease-out {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Floating animations with different patterns */
.floating-1 {
  animation: float1 8s ease-in-out infinite;
}

.floating-2 {
  animation: float2 7s ease-in-out infinite;
  animation-delay: -2s;
}

.floating-3 {
  animation: float3 5s ease-in-out infinite;
  animation-delay: -1s;
}

.floating-4 {
  animation: float4 9s ease-in-out infinite;
  animation-delay: -3s;
}

.floating-5 {
  animation: float5 6s ease-in-out infinite;
  animation-delay: -1.5s;
}

.floating-dot {
  animation: floatDot 4s ease-in-out infinite;
}

/* Keyframes for natural floating motion */
@keyframes float1 {
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  50% { transform: translateY(-15px) rotate(0.5deg) scale(1.01); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  33% { transform: translateY(-12px) translateX(3px) rotate(-0.5deg); }
  66% { transform: translateY(-8px) translateX(-3px) rotate(0.3deg); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  50% { transform: translateY(-20px) rotate(-1deg) scale(1.02); }
}

@keyframes float4 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-10px) translateX(5px); }
  75% { transform: translateY(-18px) translateX(-5px); }
}

@keyframes float5 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(1deg); }
}

@keyframes floatDot {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-25px) scale(1.15); }
}

/* Smooth hover effects */
.floating-1:hover, .floating-2:hover, .floating-3:hover, 
.floating-4:hover, .floating-5:hover {
  transform: scale(1.03) !important;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 50;
}
</style>
