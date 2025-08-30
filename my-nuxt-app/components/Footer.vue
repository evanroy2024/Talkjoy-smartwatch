<template>
  <!-- CTA Section Above Footer -->
  <section 
    ref="ctaRef"
    class="cta-section"
    :class="animationClasses"
  >
    <div class="cta-container">
      <!-- Background Decorative Elements -->
      <div class="cta-decorations">
        <!-- Diagonal Stripes -->
        <div class="cta-stripes"></div>
        <!-- Dots Pattern -->
        <div class="cta-dots"></div>
      </div>

      <!-- Main Content -->
      <div class="cta-content">
        <!-- Left Content -->
        <div class="cta-text" :class="textAnimationClasses">
          <div class="cta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="cta-icon-svg">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div class="cta-text-content">
            <h2 class="cta-title">Have Any Help to Saas Solutions?</h2>
            <p class="cta-subtitle">Professional service for your software solutions</p>
          </div>
        </div>

        <!-- Right Buttons -->
        <div class="cta-buttons" :class="buttonsAnimationClasses">
          <button class="cta-btn cta-btn-primary">
            Get Started
            <svg class="cta-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <button class="cta-btn cta-btn-secondary">
            Learn More
            <svg class="cta-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Your existing footer template stays exactly the same -->
  <footer id="footer-section" class="ft-section">
    <div class="ft-container">
      <!-- Main Footer Content with 4 Columns -->
      <div class="ft-main-content">
        <!-- Logo and Description -->
        <div class="ft-brand-column">
          <div class="ft-logo">
            <div class="ft-logo-icon">
              <!-- Siand logo placeholder -->
               <img src="/images/logo.jpg" alt="Logo" class="h-10 w-auto">
            </div>
          </div>
          
          <p class="ft-brand-description">
            Sed perspiciatis unde omnis istee sit voluptatem accusante doloreue 
            <span class="ft-highlight">laudantium</span> aperiam eaque abillo inventore
          </p>
          
          <button class="ft-read-more">
            Read More
            <svg class="ft-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Social Media Icons - Smaller Size (4 icons only) -->
          <div class="ft-social-media">
            <a href="#" class="ft-social-link ft-social-facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="ft-social-link ft-social-twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="ft-social-link ft-social-linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="ft-social-link ft-social-instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 1: About -->
        <div class="ft-link-column">
          <h3 class="ft-column-title">About</h3>
          <ul class="ft-link-list">
            <li><a href="#" class="ft-link">Success History</a></li>
            <li><a href="#" class="ft-link">Meet The Team</a></li>
            <li><a href="#" class="ft-link">Latest News</a></li>
            <li><a href="#" class="ft-link">Need a Career?</a></li>
            <li><a href="#" class="ft-link">Popular Service</a></li>
          </ul>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="ft-link-column">
          <h3 class="ft-column-title">Quick Links</h3>
          <ul class="ft-link-list">
            <li><a href="#" class="ft-link">Software Solutions</a></li>
            <li><a href="#" class="ft-link">Web Development</a></li>
            <li><a href="#" class="ft-link">Graphics Design</a></li>
            <li><a href="#" class="ft-link">Application Design</a></li>
            <li><a href="#" class="ft-link">SEO Optimization</a></li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="ft-link-column">
          <h3 class="ft-column-title">Services</h3>
          <ul class="ft-link-list">
            <li><a href="#" class="ft-link">Market Analysis</a></li>
            <li><a href="#" class="ft-link">Digital Solutions</a></li>
            <li><a href="#" class="ft-link">Consultations</a></li>
            <li><a href="#" class="ft-link">Success Rate</a></li>
            <li><a href="#" class="ft-link">User Research</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section with USA Flag and Copyright -->
      <div class="ft-bottom-section">
        <!-- Back to Top Arrow -->
        <button class="ft-back-to-top" @click="scrollToTop">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
          </svg>
        </button>

        <!-- USA Flag and Copyright - CENTERED -->
        <div class="ft-bottom-content">
          <div class="ft-usa-content">
            <!-- American Flag SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="ft-flag-icon">
              <rect width="640" height="480" fill="#fff"/>
              <g fill="#bf0a30">
                <rect width="640" height="36.923"/>
                <rect y="73.846" width="640" height="36.923"/>
                <rect y="147.692" width="640" height="36.923"/>
                <rect y="221.538" width="640" height="36.923"/>
                <rect y="295.385" width="640" height="36.923"/>
                <rect y="369.231" width="640" height="36.923"/>
                <rect y="443.077" width="640" height="36.923"/>
              </g>
              <rect width="246.154" height="295.385" fill="#002868"/>
            </svg>
            <span class="ft-usa-text">Proudly Designed and Assembled in the USA</span>
          </div>

          <!-- Copyright -->
          <div class="ft-copyright">
            © 2025 <a href="#" class="ft-brand-link">Admin</a>. All rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// CTA Animation State
const ctaRef = ref(null)
const isCtaVisible = ref(false)
const isTextVisible = ref(false)
const isButtonsVisible = ref(false)

let observer = null

// Computed classes for smooth animations
const animationClasses = computed(() => ({
  'opacity-0 translate-y-8': !isCtaVisible.value,
  'opacity-100 translate-y-0': isCtaVisible.value,
  'transition-all duration-1000 ease-out': true
}))

const textAnimationClasses = computed(() => ({
  'opacity-0 translate-x-12': !isTextVisible.value,
  'opacity-100 translate-x-0': isTextVisible.value,
  'transition-all duration-800 ease-out delay-300': true
}))

const buttonsAnimationClasses = computed(() => ({
  'opacity-0 translate-x-12': !isButtonsVisible.value,
  'opacity-100 translate-x-0': isButtonsVisible.value,
  'transition-all duration-800 ease-out delay-500': true
}))

// Footer scroll function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animations in sequence
          setTimeout(() => {
            isCtaVisible.value = true
          }, 100)
          
          setTimeout(() => {
            isTextVisible.value = true
          }, 400)
          
          setTimeout(() => {
            isButtonsVisible.value = true
          }, 600)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (ctaRef.value) {
    observer.observe(ctaRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* CTA Section Styles */
.cta-section {
  background: linear-gradient(135deg, #5138ee 0%, #7c3aed 100%);
  position: relative;
  overflow: hidden;
  margin: 0 5%;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
}

.cta-container {
  max-width: 90rem;
  margin: 0 auto;
  padding: 3rem 4rem;
  position: relative;
  z-index: 10;
}

/* Background Decorations */
.cta-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.cta-stripes {
  position: absolute;
  top: 20px;
  right: 100px;
  width: 120px;
  height: 80px;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 4px,
    rgba(255, 255, 255, 0.1) 4px,
    rgba(255, 255, 255, 0.1) 8px
  );
  border-radius: 12px;
}

.cta-dots {
  position: absolute;
  bottom: 30px;
  left: 60%;
  width: 80px;
  height: 60px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 2px, transparent 3px);
  background-size: 15px 15px;
  background-repeat: repeat;
  border-radius: 8px;
}

/* Main Content */
.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

/* Left Text Content */
.cta-text {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
}

.cta-icon {
  flex-shrink: 0;
}

.cta-icon-svg {
  width: 3rem;
  height: 3rem;
  color: white;
  stroke-width: 1.5;
}

.cta-text-content h2.cta-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
}

.cta-text-content p.cta-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

/* Right Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
}

.cta-btn-primary {
  background: white;
  color: #5138ee;
  border-color: white;
}

.cta-btn-primary:hover {
  background: transparent;
  color: white;
  border-color: white;
  transform: translateY(-2px);
}

.cta-btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-btn-secondary:hover {
  background: white;
  color: #5138ee;
  transform: translateY(-2px);
}

.cta-btn-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.cta-btn:hover .cta-btn-arrow {
  transform: translateX(0.25rem);
}

/* Responsive Design for CTA */
@media (max-width: 1200px) {
  .cta-container {
    padding: 2.5rem 3rem;
  }
  
  .cta-text-content h2.cta-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .cta-section {
    margin: 0 2%;
  }
  
  .cta-container {
    padding: 2rem;
  }
  
  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .cta-text {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-text-content h2.cta-title {
    font-size: 1.75rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-btn {
    justify-content: center;
  }
}

/* All your existing footer styles remain exactly the same */
.ft-section {
  background: #f8fafc;
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.ft-container {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.ft-main-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.ft-brand-column {
  max-width: 20rem;
}

.ft-logo {
  margin-bottom: 1.5rem;
}

.ft-logo-icon {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ft-logo-dots {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #5138ee, #7c3aed);
  border-radius: 0.5rem;
  position: relative;
}

.ft-logo-dots::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.75rem;
  height: 0.75rem;
  background: white;
  border-radius: 0.25rem;
}

.ft-logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  font-family: 'Poppins', sans-serif;
}

.ft-brand-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

.ft-highlight {
  color: #5138ee;
  font-weight: 600;
}

.ft-read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #5138ee;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.ft-read-more:hover {
  color: #4338ca;
}

.ft-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.ft-read-more:hover .ft-arrow {
  transform: translateX(0.25rem);
}

.ft-social-media {
  display: flex;
  gap: 0.5rem;
}

.ft-social-link {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
}

.ft-social-link svg {
  width: 1rem;
  height: 1rem;
}

.ft-social-facebook { background: #1877f2; color: white; }
.ft-social-twitter { background: #1da1f2; color: white; }
.ft-social-linkedin { background: #0077b5; color: white; }
.ft-social-instagram { 
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  color: white; 
}

.ft-social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.ft-link-column {
  min-width: 12rem;
}

.ft-column-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

.ft-link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ft-link-list li {
  margin-bottom: 0.75rem;
}

.ft-link {
  color: #6b7280;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: color 0.3s ease;
}

.ft-link:hover {
  color: #5138ee;
}

.ft-bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  padding-top: 2rem;
}

.ft-back-to-top {
  width: 2.5rem;
  height: 2.5rem;
  background: #5138ee;
  color: white;
  border: none;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ft-back-to-top:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

.ft-back-to-top svg {
  width: 1.25rem;
  height: 1.25rem;
}

.ft-bottom-content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.ft-usa-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ft-flag-icon {
  width: 1.5rem;
  height: auto;
}

.ft-usa-text {
  color: #374151;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
}

.ft-copyright {
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
}

.ft-brand-link {
  color: #5138ee;
  text-decoration: none;
  font-weight: 600;
}

.ft-brand-link:hover {
  color: #4338ca;
}

@media (max-width: 1200px) {
  .ft-main-content {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .ft-main-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .ft-brand-column {
    max-width: none;
  }
  
  .ft-bottom-section {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .ft-bottom-content {
    position: relative;
    left: auto;
    transform: none;
    flex-direction: column;
    gap: 1rem;
  }
  
  .ft-social-media {
    justify-content: center;
  }
}
</style>
