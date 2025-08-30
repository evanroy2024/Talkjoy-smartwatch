<template>
  <div class="min-h-screen bg-primary font-brand text-[color:var(--text-primary)]">
    <!-- Single smooth page load animation -->
    <div class="page-container">
      <!-- Top Welcome Banner -->
      <div class="bg-accent py-3 px-4 text-white text-center relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
          <div class="flex gap-1">
            <div class="w-2 h-2 bg-white/30 rotate-45"></div>
            <div class="w-2 h-2 bg-white/30 rotate-45"></div>
            <div class="w-2 h-2 bg-white/30 rotate-45"></div>
          </div>
        </div>
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg class="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <h1 class="font-brand-semibold text-lg">Welcome to SLand a Modern Saaslanding Template</h1>
      </div>

      <!-- Navbar -->
      <header class="w-full border-b border-border sticky top-0 bg-white z-50">
        <nav class="max-w-none mx-auto flex items-center justify-between px-16 py-4">
          <!-- Logo -->
          <div class="flex items-center">
  <img src="/images/logo.jpg" alt="Logo" class="h-10 w-auto">
</div>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex items-center gap-2 text-navlink font-semibold">
            <!-- Home dropdown -->
            <li class="relative group">
              <a href="#" class="flex items-center gap-1 py-2 px-4 rounded text-base hover:text-accent transition-all duration-300 border-b-2 border-transparent hover:border-accent">
                Home
                <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                  <path d="M4 5l2 2 2-2"></path>
                </svg>
              </a>
              <div class="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[180px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 z-50">
                <a href="#" class="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-accent transition-all duration-200 first:rounded-t-lg">Home Default</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-accent transition-all duration-200">SaaS Landing</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-accent transition-all duration-200">App Landing</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-accent transition-all duration-200">Marketing</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-accent transition-all duration-200 last:rounded-b-lg">Agency</a>
              </div>

            </li>

            <!-- About (no dropdown) -->
            <li>
              <a href="#" class="py-2 px-4 rounded text-base hover:text-accent transition-all duration-300 border-b-2 border-transparent hover:border-accent">About</a>
            </li>

            <!-- Project dropdown -->
            <li class="relative group">
              <a href="#" class="flex items-center gap-1 py-2 px-4 rounded text-base hover:text-accent transition-all duration-300 border-b-2 border-transparent hover:border-accent">
                Project
                <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                  <path d="M4 5l2 2 2-2"></path>
                </svg>
              </a>
             <div class="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[200px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 z-50">
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200 first:rounded-t-lg">Web Applications</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Mobile Apps</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">E-commerce</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Dashboard</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Portfolio</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200 last:rounded-b-lg">Case Studies</a>
              </div>

            </li>

            <!-- Blog dropdown -->
            <li class="relative group">
              <a href="#" class="flex items-center gap-1 py-2 px-4 rounded text-base hover:text-accent transition-all duration-300 border-b-2 border-transparent hover:border-accent">
                Blog
                <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                  <path d="M4 5l2 2 2-2"></path>
                </svg>
              </a>
              <div class="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[160px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 z-50">
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200 first:rounded-t-lg">All Articles</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Tech Guides</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Tutorials</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">News</a>
                <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200 last:rounded-b-lg">Updates</a>
              </div>

            </li>

            <!-- Pages dropdown -->
            <li class="relative group">
              <a href="#" class="flex items-center gap-1 py-2 px-4 rounded text-base hover:text-accent transition-all duration-300 border-b-2 border-transparent hover:border-accent">
                Pages
                <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                  <path d="M4 5l2 2 2-2"></path>
                </svg>
              </a>
             <div class="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[180px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 z-50">
              <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200 first:rounded-t-lg">Pricing Plans</a>
              <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">FAQ</a>
              <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Privacy Policy</a>
              <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Terms of Service</a>
              <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200">Support</a>
              <a href="#" class="block px-5 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-accent transition-all duration-200 last:rounded-b-lg">Help Center</a>
            </div>

            </li>

            <!-- Contact (no dropdown) -->
            <li>
              <a href="#" class="py-2 px-4 rounded text-base hover:text-accent transition-all duration-300 border-b-2 border-transparent hover:border-accent">Contact</a>
            </li>
          </ul>

          <!-- Desktop Right section: Search + Language + Get Started (hidden on mobile) -->
          <div class="hidden md:flex items-center gap-3">
            <!-- Search button -->
            <button class="p-2 text-navlink hover:text-accent transition-all duration-300 hover:bg-accentlight rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"/>
                <line x1="16" y1="16" x2="21" y2="21"/>
              </svg>
            </button>
            
            <div class="border-r border-border h-6 mx-2"/>
            
            <!-- Language dropdown -->
            <div class="relative group">
              <button class="flex items-center gap-1 py-2 px-3 rounded hover:bg-accentlight transition-all duration-300 font-semibold">
                English
                <svg class="inline ml-0.5 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                  <path d="M4 5l2 2 2-2"></path>
                </svg>
              </button>
              <div class="absolute right-0 mt-1 bg-white shadow-xl rounded-lg border border-border w-32 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 z-50">
                <a href="#" class="block px-4 py-2 text-sm hover:bg-accentlight hover:text-accent transition-all duration-200 first:rounded-t-lg">English</a>
                <a href="#" class="block px-4 py-2 text-sm hover:bg-accentlight hover:text-accent transition-all duration-200">Hindi</a>
                <a href="#" class="block px-4 py-2 text-sm hover:bg-accentlight hover:text-accent transition-all duration-200">Spanish</a>
                <a href="#" class="block px-4 py-2 text-sm hover:bg-accentlight hover:text-accent transition-all duration-200 last:rounded-b-lg">French</a>
              </div>
            </div>
            
            <!-- Get Started button -->
            <a href="#" class="ml-2 px-6 py-2 rounded-lg bg-accent hover:bg-[#6842c2] text-white font-brand-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base transform hover:scale-105">
              Get Started <span class="ml-1">&rarr;</span>
            </a>
          </div>

          <!-- Mobile hamburger menu -->
          <button class="md:hidden ml-2 relative z-50 p-2" @click="toggleMobileMenu" aria-label="Menu">
            <span :class="['block w-7 h-[2px] rounded-sm bg-navlink mb-[5px] transform transition-all duration-300', mobileOpen ? 'rotate-45 translate-y-[7px] bg-accent' : '']"></span>
            <span :class="['block w-7 h-[2px] rounded-sm bg-navlink mb-[5px] transition-all duration-300', mobileOpen ? 'opacity-0' : '']"></span>
            <span :class="['block w-7 h-[2px] rounded-sm bg-navlink transition-all duration-300', mobileOpen ? '-rotate-45 -translate-y-[7px] bg-accent' : '']"></span>
          </button>
        </nav>

        <!-- Mobile menu overlay -->
        <transition name="mobile-fade">
          <div v-if="mobileOpen" class="md:hidden fixed inset-0 z-40 bg-white overflow-auto">
            <div class="flex flex-col h-full justify-start items-center pt-20 pb-10 px-6">
              <!-- Mobile menu content -->
              <div class="text-center space-y-8 w-full max-w-sm">
                <!-- Navigation Links -->
                <ul class="space-y-6 text-2xl font-semibold text-navlink">
                  <li>
                    <button @click="toggleHomeDropdown" class="flex items-center justify-center gap-2 py-3 hover:text-accent transition-all duration-300 w-full">
                      Home 
                      <svg :class="['w-4 h-4 transition-transform duration-300', showHomeDropdown ? 'rotate-180' : '']" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                        <path d="M4 5l2 2 2-2"></path>
                      </svg>
                    </button>
                    <transition name="dropdown-slide">
                      <div v-if="showHomeDropdown" class="mt-4 space-y-3 text-lg text-text-secondary bg-gray-50 rounded-xl p-4">
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Home Default</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">SaaS Landing</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">App Landing</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Marketing</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Agency</a>
                      </div>
                    </transition>
                  </li>
                  <li><a href="#" @click="closeMobileMenu" class="block py-3 hover:text-accent transition-all duration-300">About</a></li>
                  <li>
                    <button @click="toggleProjectDropdown" class="flex items-center justify-center gap-2 py-3 hover:text-accent transition-all duration-300 w-full">
                      Project 
                      <svg :class="['w-4 h-4 transition-transform duration-300', showProjectDropdown ? 'rotate-180' : '']" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                        <path d="M4 5l2 2 2-2"></path>
                      </svg>
                    </button>
                    <transition name="dropdown-slide">
                      <div v-if="showProjectDropdown" class="mt-4 space-y-3 text-lg text-text-secondary bg-gray-50 rounded-xl p-4">
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Web Applications</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Mobile Apps</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">E-commerce</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Dashboard</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Portfolio</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Case Studies</a>
                      </div>
                    </transition>
                  </li>
                  <li>
                    <button @click="toggleBlogDropdown" class="flex items-center justify-center gap-2 py-3 hover:text-accent transition-all duration-300 w-full">
                      Blog 
                      <svg :class="['w-4 h-4 transition-transform duration-300', showBlogDropdown ? 'rotate-180' : '']" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                        <path d="M4 5l2 2 2-2"></path>
                      </svg>
                    </button>
                    <transition name="dropdown-slide">
                      <div v-if="showBlogDropdown" class="mt-4 space-y-3 text-lg text-text-secondary bg-gray-50 rounded-xl p-4">
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">All Articles</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Tech Guides</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Tutorials</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">News</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Updates</a>
                      </div>
                    </transition>
                  </li>
                  <li>
                    <button @click="togglePagesDropdown" class="flex items-center justify-center gap-2 py-3 hover:text-accent transition-all duration-300 w-full">
                      Pages 
                      <svg :class="['w-4 h-4 transition-transform duration-300', showPagesDropdown ? 'rotate-180' : '']" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 12 12">
                        <path d="M4 5l2 2 2-2"></path>
                      </svg>
                    </button>
                    <transition name="dropdown-slide">
                      <div v-if="showPagesDropdown" class="mt-4 space-y-3 text-lg text-text-secondary bg-gray-50 rounded-xl p-4">
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Pricing Plans</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">FAQ</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Privacy Policy</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Terms of Service</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Support</a>
                        <a href="#" @click="closeMobileMenu" class="block py-2 hover:text-accent transition-all duration-200">Help Center</a>
                      </div>
                    </transition>
                  </li>
                  <li><a href="#" @click="closeMobileMenu" class="block py-3 hover:text-accent transition-all duration-300">Contact</a></li>
                </ul>

                <!-- Language selector -->
                <div class="space-y-4 pt-4 border-t border-border">
                  <div class="text-sm text-text-secondary font-medium">Choose Language</div>
                  <div class="flex justify-center gap-3 text-base">
                    <button @click="setLanguage('en')" class="py-2 px-4 rounded-lg hover:bg-accentlight hover:text-accent transition-all duration-300 font-medium" :class="selectedLanguage === 'en' ? 'bg-accentlight text-accent' : 'text-navlink bg-gray-50'">English</button>
                    <button @click="setLanguage('hi')" class="py-2 px-4 rounded-lg hover:bg-accentlight hover:text-accent transition-all duration-300 font-medium" :class="selectedLanguage === 'hi' ? 'bg-accentlight text-accent' : 'text-navlink bg-gray-50'">Hindi</button>
                    <button @click="setLanguage('es')" class="py-2 px-4 rounded-lg hover:bg-accentlight hover:text-accent transition-all duration-300 font-medium" :class="selectedLanguage === 'es' ? 'bg-accentlight text-accent' : 'text-navlink bg-gray-50'">Spanish</button>
                  </div>
                </div>

                <!-- Action buttons -->
                <div class="flex flex-col gap-4 pt-6">
                  <a href="#" @click="closeMobileMenu" class="px-8 py-4 rounded-lg bg-accent hover:bg-[#6842c2] text-white font-brand-semibold shadow-lg transition-all duration-300 transform hover:scale-105 text-lg">
                    Get Started <span class="ml-1">&rarr;</span>
                  </a>
                  <a href="#" @click="closeMobileMenu" class="px-8 py-4 rounded-lg bg-accentlight hover:bg-[#ebe7fa] text-accent font-brand-semibold transition-all duration-300 text-lg">
                    Learn More <span class="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </header>

      <!-- Hero Section -->
      <main class="max-w-none mx-auto px-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 py-24">
        <!-- Left content -->
        <div class="flex-1 w-full max-w-2xl">
          <!-- Decorative dots -->
          <div class="flex gap-1 mb-6">
            <div class="w-2 h-2 bg-accentlight rounded-full"></div>
            <div class="w-2 h-2 bg-accentlight rounded-full"></div>
            <div class="w-2 h-2 bg-accentlight rounded-full"></div>
          </div>
          
          <span class="inline-block px-5 py-2 rounded-lg bg-accentlight text-accent font-brand-medium text-sm mb-6">Saaslanding Agency</span>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-brand-bold text-darker mb-6 leading-tight">Advanced analytics<br />software solutions</h1>
          
          <p class="text-xl text-text-secondary mb-8 leading-relaxed">Sit amet consectetur adipiscing elit seddo eiusmod tempode dunt ut labore et dolore magna aliqua suspendisse</p>
          
          <ul class="mb-10 space-y-3">
            <li class="flex items-center gap-3 text-lg text-darker">
              <span class="text-accent text-xl">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" fill="#7f56d9"/>
                  <path d="M7 10.5l2 2 3.5-3.5" stroke="#fff" stroke-width="2" fill="none"/>
                </svg>
              </span>
              30-day free trial of our premium plan
            </li>
            <li class="flex items-center gap-3 text-lg text-darker">
              <span class="text-accent text-xl">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" fill="#7f56d9"/>
                  <path d="M7 10.5l2 2 3.5-3.5" stroke="#fff" stroke-width="2" fill="none"/>
                </svg>
              </span>
              100% Free - No payments required
            </li>
          </ul>
          
          <div class="flex flex-col sm:flex-row gap-5">
            <a href="#" class="px-10 py-4 rounded-lg bg-accent hover:bg-[#6842c2] text-white text-lg font-brand-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105">Get Started <span class="inline-block ml-2">&rarr;</span></a>
            <a href="#" class="px-10 py-4 rounded-lg bg-accentlight hover:bg-[#ebe7fa] text-accent text-lg font-brand-semibold transition-all duration-300 text-center">Learn More <span class="inline-block ml-2">&rarr;</span></a>
          </div>

          <!-- Decorative star -->
          <div class="mt-8 text-accent">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
        </div>
        
        <!-- Right image -->
        <div class="flex-1 w-full flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Advanced analytics software"
            class="rounded-xl object-cover w-[380px] h-[400px] md:w-[500px] md:h-[520px] lg:w-[600px] lg:h-[620px] xl:w-[700px] xl:h-[720px] border border-border shadow-2xl"
            loading="eager"
          />
        </div>
      </main>
    </div>
  </div>


 <FloatingShapes />
<!-- Insert your UserExperienceSection component here -->
    <Headernext />
    <Solutions />

    <UserExperienceSection />
    <Corefeatures />
    <Services />
    <Updates />
    <Feedback />
    <Footer />
</template>

<script setup>
import { ref } from 'vue'
import UserExperienceSection from '../components/UserExperienceSection.vue'
import Solutions from '../components/Solutions.vue'
import Corefeatures from '../components/Corefeatures.vue'
import Services from '../components/Services.vue'
import Updates from '../components/Updates.vue'
import Feedback from '../components/Feedback.vue'
import Footer from '../components/Footer.vue'
import FloatingShapes from '../components/FloatingShapes.vue'
import Headernext from '../components/Headernext.vue'





const mobileOpen = ref(false)
const showHomeDropdown = ref(false)
const showProjectDropdown = ref(false)
const showBlogDropdown = ref(false)
const showPagesDropdown = ref(false)
const selectedLanguage = ref('en')

const toggleMobileMenu = () => { 
  mobileOpen.value = !mobileOpen.value 
  if (!mobileOpen.value) {
    showHomeDropdown.value = false
    showProjectDropdown.value = false
    showBlogDropdown.value = false
    showPagesDropdown.value = false
  }
}

const closeMobileMenu = () => { 
  mobileOpen.value = false
  showHomeDropdown.value = false
  showProjectDropdown.value = false
  showBlogDropdown.value = false
  showPagesDropdown.value = false
}

const toggleHomeDropdown = () => { showHomeDropdown.value = !showHomeDropdown.value }
const toggleProjectDropdown = () => { showProjectDropdown.value = !showProjectDropdown.value }
const toggleBlogDropdown = () => { showBlogDropdown.value = !showBlogDropdown.value }
const togglePagesDropdown = () => { showPagesDropdown.value = !showPagesDropdown.value }

const setLanguage = (lang) => { 
  selectedLanguage.value = lang
  closeMobileMenu()
}


</script>


<style scoped>

/* Single smooth page animation */
.page-container {
  opacity: 0;
  transform: translateY(30px);
  animation: smoothPageLoad 1.2s ease-out 0.3s forwards;
}

@keyframes smoothPageLoad {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile menu animation */
.mobile-fade-enter-active,
.mobile-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.33, 0, 0.67, 1);
}
.mobile-fade-enter-from,
.mobile-fade-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(20px);
}

/* Mobile dropdown slide animation */
.dropdown-slide-enter-active,
.dropdown-slide-leave-active {
  transition: all 0.3s ease-out;
}
.dropdown-slide-enter-from,
.dropdown-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}
.dropdown-slide-enter-to,
.dropdown-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 300px;
}



</style>

