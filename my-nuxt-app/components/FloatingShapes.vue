<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-50">
    <!-- Donut -->
    <div 
      ref="donut"
      class="absolute animate-float-slow"
      style="left: 15%; top: 20%; animation-delay: 0s; animation-duration: 18s;"
    >
      <div 
        class="rounded-full border-2 border-blue-400 opacity-40"
        style="width: 35px; height: 35px;"
      ></div>
    </div>



    <!-- Star -->
    <div 
      ref="star"
      class="absolute animate-float-slow opacity-30"
      style="left: 80%; top: 70%; animation-delay: 5s; animation-duration: 22s;"
    >
      <div class="star bg-green-400" style="width: 20px; height: 20px;"></div>
    </div>

    <!-- Circle -->
    <div 
      ref="circle"
      class="absolute animate-float-medium"
      style="left: 10%; top: 75%; animation-delay: 8s; animation-duration: 16s;"
    >
      <div 
        class="rounded-full bg-pink-400 opacity-35"
        style="width: 16px; height: 16px;"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const donut = ref(null)
const star = ref(null)
const circle = ref(null)

let scrollY = 0

const handleScroll = () => {
  scrollY = window.scrollY
  
  if (donut.value) {
    donut.value.style.transform = `translateY(${scrollY * 0.15}px) translateX(${Math.sin(scrollY * 0.005) * 10}px)`
  }
  if (star.value) {
    star.value.style.transform = `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.2}deg)`
  }
  if (circle.value) {
    circle.value.style.transform = `translateY(${scrollY * -0.12}px) translateX(${Math.sin(scrollY * 0.004) * 6}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-25px) translateX(15px) rotate(90deg);
  }
  50% {
    transform: translateY(-12px) translateX(-8px) rotate(180deg);
  }
  75% {
    transform: translateY(-30px) translateX(-12px) rotate(270deg);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateX(0px) translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateX(18px) translateY(-18px) rotate(60deg);
  }
  50% {
    transform: translateX(-12px) translateY(-25px) rotate(120deg);
  }
  75% {
    transform: translateX(-18px) translateY(-10px) rotate(180deg);
  }
}

.animate-float-slow {
  animation: float-slow ease-in-out infinite;
  transition: transform 0.1s ease-out;
}

.animate-float-medium {
  animation: float-medium ease-in-out infinite;
  transition: transform 0.1s ease-out;
}

.star {
  position: relative;
  display: inline-block;
}

.star:before,
.star:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background: currentColor;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.star:after {
  transform: rotate(-45deg);
}

.star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}</style>