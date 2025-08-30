<template>
<div class="min-h-screen" style="background-color: rgb(246 246 246);">
    <!-- Nav Start -->
    <nav class="bg-primary relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center h-16 sm:h-20">
           <img src="/logo.png"  class="logo" />

          <div class="flex items-center space-x-2 sm:space-x-3">
            <!-- <div class="flex flex-col leading-none">
              <span class="text-sm sm:text-lg font-brand-bold text-text-primary">STATION</span>
              <span class="text-xs sm:text-sm font-brand-semibold text-text-primary">PLATFORM</span>
            </div> -->
          </div>

          <div class="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a href="#" class="text-text-secondary font-brand-medium text-sm xl:text-base hover:text-accent transition-colors duration-200">Home</a>
            <a href="#" class="text-text-secondary font-brand-medium text-sm xl:text-base hover:text-accent transition-colors duration-200">Platform</a>
            <a href="#" class="text-text-secondary font-brand-medium text-sm xl:text-base hover:text-accent transition-colors duration-200">Devices</a>
            <a href="#" class="text-text-secondary font-brand-medium text-sm xl:text-base hover:text-accent transition-colors duration-200">Solutions</a>
            <a href="#" class="text-text-secondary font-brand-medium text-sm xl:text-base hover:text-accent transition-colors duration-200">Resources</a>
            <a href="#" class="text-text-secondary font-brand-medium text-sm xl:text-base hover:text-accent transition-colors duration-200">Support</a>
          </div>

          <div class="hidden lg:flex items-center space-x-3 sm:space-x-6">
            <button class="text-accent font-brand-medium text-sm sm:text-base hover:text-accent/80 transition-colors duration-200">Login</button>
            <button class="bg-accent text-primary px-4 py-2 sm:px-8 sm:py-3 rounded-full font-brand-medium text-sm sm:text-base hover:bg-accent/90 transition-colors duration-200">Sign up</button>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="showMobileMenu = !showMobileMenu" class="lg:hidden ml-4 p-2 z-50 relative">
            <div class="w-6 h-6 flex flex-col justify-center items-center relative">
              <div :class="['w-6 h-0.5 bg-text-secondary transition-all duration-300 ease-in-out absolute', showMobileMenu ? 'rotate-45 top-1/2 transform -translate-y-1/2' : 'top-1']"></div>
              <div :class="['w-6 h-0.5 bg-text-secondary transition-all duration-300 ease-in-out absolute top-1/2 transform -translate-y-1/2', showMobileMenu ? 'opacity-0' : 'opacity-100']"></div>
              <div :class="['w-6 h-0.5 bg-text-secondary transition-all duration-300 ease-in-out absolute', showMobileMenu ? '-rotate-45 top-1/2 transform -translate-y-1/2' : 'bottom-1']"></div>
            </div>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div :class="['lg:hidden fixed top-16 sm:top-20 left-0 w-full bg-primary z-40 transition-all duration-500 ease-in-out', showMobileMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden']">
          <div class="border-t border-neutral-lighter">
            <div class="px-4 py-6 space-y-1">
              <a href="#" class="block py-3 px-4 text-text-secondary font-brand-medium rounded-lg hover:bg-neutral-light hover:text-accent transition-all duration-200">Home</a>
              <a href="#" class="block py-3 px-4 text-text-secondary font-brand-medium rounded-lg hover:bg-neutral-light hover:text-accent transition-all duration-200">Platform</a>
              <a href="#" class="block py-3 px-4 text-text-secondary font-brand-medium rounded-lg hover:bg-neutral-light hover:text-accent transition-all duration-200">Devices</a>
              <a href="#" class="block py-3 px-4 text-text-secondary font-brand-medium rounded-lg hover:bg-neutral-light hover:text-accent transition-all duration-200">Solutions</a>
              <a href="#" class="block py-3 px-4 text-text-secondary font-brand-medium rounded-lg hover:bg-neutral-light hover:text-accent transition-all duration-200">Resources</a>
              <a href="#" class="block py-3 px-4 text-text-secondary font-brand-medium rounded-lg hover:bg-neutral-light hover:text-accent transition-all duration-200">Support</a>
              
              <!-- Mobile Auth Buttons in Menu -->
              <div class="pt-6 space-y-3 pb-4">
                <button class="w-full py-3 px-4 text-accent font-brand-medium rounded-lg border border-accent hover:bg-accent hover:text-primary transition-all duration-200">Login</button>
                <button class="w-full py-3 px-4 bg-accent text-primary font-brand-medium rounded-lg hover:bg-accent/90 transition-colors duration-200">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Nav End -->

    <!-- Header Start -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-20">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        
        <div class="w-full lg:w-1/2 lg:pr-8 xl:pr-16 mb-8 lg:mb-0">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-brand-bold leading-tight mb-6 sm:mb-8">
            <div class="text-text-primary">Advanced <span class="text-accent">Cloud</span></div>
            <div class="text-accent">Solution <span class="text-text-primary">for</span> </div>
            <div class="text-text-primary">Intelligent Devices</div>
          </h1>

          <p class="text-text-muted text-base sm:text-lg xl:text-xl mb-8 sm:mb-12 leading-relaxed max-w-lg">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button class="bg-accent text-primary px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-brand-semibold hover:bg-accent/90 transition-colors duration-200">
            Register
          </button>
        </div>

        <div class="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-neutral-light rounded-full"></div>
          <div class="absolute bottom-16 sm:bottom-20 left-0 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-neutral-medium rounded-full"></div>
          <div class="absolute top-20 sm:top-32 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-neutral-lighter rounded-full"></div>

          <div class="relative z-10 flex justify-center items-center h-64 sm:h-80 lg:h-96">
            <img src="/images/1.png" class="ml-4 animate-float" id="mainimg" />

            <!-- <div class="relative">
              <div class="w-64 h-40 sm:w-72 sm:h-44 lg:w-80 lg:h-52 bg-dark rounded-lg p-3 sm:p-4 relative">
                <div class="w-full h-full bg-darker rounded-md p-3 sm:p-4">
                  <div class="space-y-2 sm:space-y-3">
                    <div class="flex space-x-1.5 sm:space-x-2 mb-3 sm:mb-4">
                      <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div class="h-1.5 sm:h-2 bg-accent rounded w-3/4"></div>
                    <div class="h-1.5 sm:h-2 bg-blue-400 rounded w-2/3"></div>
                    <div class="h-1.5 sm:h-2 bg-purple-400 rounded w-5/6"></div>
                    <div class="h-1.5 sm:h-2 bg-yellow-400 rounded w-1/2"></div>
                    <div class="h-1.5 sm:h-2 bg-accent rounded w-4/5"></div>
                    <div class="h-1.5 sm:h-2 bg-blue-400 rounded w-3/5"></div>
                  </div>
                </div>

                <div class="absolute -right-8 sm:-right-10 lg:-right-12 top-3 sm:top-4 w-8 sm:w-9 lg:w-10 h-24 sm:h-28 lg:h-32 bg-accent rounded-lg p-1.5 sm:p-2">
                  <div class="space-y-1.5 sm:space-y-2">
                    <div class="w-full h-3 sm:h-4 bg-primary rounded"></div>
                    <div class="w-full h-2.5 sm:h-3 bg-primary rounded opacity-80"></div>
                    <div class="w-full h-2.5 sm:h-3 bg-primary rounded opacity-60"></div>
                  </div>
                </div>
              </div>

              <div class="w-3 sm:w-4 h-6 sm:h-8 bg-neutral-dark mx-auto"></div>
              <div class="w-16 sm:w-20 h-2.5 sm:h-3 bg-neutral-dark mx-auto rounded"></div>
            </div>

            <div class="absolute right-0 bottom-0">
              <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-pink-200 rounded-full relative mb-1.5 sm:mb-2">
                <div class="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-9 lg:w-10 h-4 sm:h-5 lg:h-6 bg-dark rounded-t-full"></div>
                <div class="absolute top-5 sm:top-6 lg:top-7 left-3.5 sm:left-4 lg:left-5 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-dark rounded-full"></div>
                <div class="absolute top-5 sm:top-6 lg:top-7 right-3.5 sm:right-4 lg:right-5 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-dark rounded-full"></div>
                <div class="absolute top-7 sm:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-0.5 sm:h-1 bg-pink-300 rounded"></div>
              </div>

              <div class="w-10 h-16 sm:w-12 sm:h-20 lg:w-14 lg:h-24 bg-accent rounded-lg mx-auto relative">
                <div class="absolute -left-3 sm:-left-4 top-2 sm:top-3 w-6 sm:w-7 lg:w-8 h-3 sm:h-4 bg-pink-200 rounded-full transform -rotate-12"></div>
                <div class="absolute -right-4 sm:-right-5 lg:-right-6 top-2 sm:top-3 w-7 sm:w-8 lg:w-10 h-3 sm:h-4 bg-pink-200 rounded-full transform rotate-12"></div>
                <div class="absolute -right-5 sm:-right-6 lg:-right-8 top-1.5 sm:top-2 w-7 sm:w-8 lg:w-10 h-5 sm:h-6 lg:h-8 bg-neutral-medium rounded transform rotate-12">
                  <div class="w-full h-2.5 sm:h-3 lg:h-4 bg-dark rounded-t"></div>
                </div>
              </div>

              <div class="flex justify-center space-x-1.5 sm:space-x-2 mt-1.5 sm:mt-2">
                <div class="w-3 sm:w-3.5 lg:w-4 h-10 sm:h-12 lg:h-16 bg-neutral-darker rounded-full"></div>
                <div class="w-3 sm:w-3.5 lg:w-4 h-10 sm:h-12 lg:h-16 bg-neutral-darker rounded-full"></div>
              </div>
            </div> -->

            <!-- <div class="absolute top-4 sm:top-6 lg:top-8 left-2 sm:left-3 lg:left-4 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-accent rounded transform rotate-45"></div>
            <div class="absolute top-6 sm:top-8 lg:top-12 right-8 sm:right-10 lg:right-12 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-yellow-400 rounded-full"></div>
            <div class="absolute bottom-20 sm:bottom-24 lg:bottom-32 right-2 sm:right-3 lg:right-4">
              <div class="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-primary rounded-lg shadow-md flex items-center justify-center">
                <div class="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 bg-neutral-medium rounded"></div>
              </div>
            </div>  -->
          </div>
        </div>
      </div>
    </main>
    <!-- Header End -->
  </div>
  <!-- About Us Section Start -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
  <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
    
    <!-- Left Side - Illustration -->
    <div class="w-full lg:w-1/2 relative">
      <img src="/images/2.png" class="ain-img ml-4"  style="width: 70%;" />

      <!-- <div class="flex justify-center items-center">
        <div class="relative">
          <div class="w-64 h-48 sm:w-80 sm:h-60 bg-accent rounded-lg p-4 relative">
            <div class="w-full h-full bg-primary rounded-md p-4 relative">
              <div class="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div class="w-4 h-4 bg-accent rounded-full"></div>
                </div>
              </div>
              
              <div class="space-y-2">
                <div class="flex space-x-1 justify-center">
                  <div class="w-2 h-2 bg-neutral-medium rounded-full"></div>
                  <div class="w-2 h-2 bg-neutral-medium rounded-full"></div>
                  <div class="w-2 h-2 bg-neutral-medium rounded-full"></div>
                </div>
                <div class="space-y-2 mt-4">
                  <div class="flex space-x-1 justify-center">
                    <div class="w-2 h-2 bg-text-primary rounded-full"></div>
                    <div class="w-2 h-2 bg-text-primary rounded-full"></div>
                    <div class="w-2 h-2 bg-text-primary rounded-full"></div>
                    <div class="w-2 h-2 bg-text-primary rounded-full"></div>
                    <div class="w-2 h-2 bg-text-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -left-16 sm:-left-20 top-8 sm:top-12">
            <div class="relative">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 rounded-full mb-2 relative">
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 sm:w-14 h-6 sm:h-8 bg-text-primary rounded-t-full"></div>
                <div class="absolute top-4 sm:top-5 left-3 sm:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-text-primary rounded-full"></div>
                <div class="absolute top-4 sm:top-5 right-3 sm:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-text-primary rounded-full"></div>
              </div>
              
              <div class="w-10 h-16 sm:w-12 sm:h-20 bg-accent rounded-lg mx-auto relative">
                <div class="absolute -left-3 top-2 w-6 h-3 sm:w-8 sm:h-4 bg-pink-200 rounded-full transform -rotate-12"></div>
                <div class="absolute -right-3 top-2 w-6 h-3 sm:w-8 sm:h-4 bg-pink-200 rounded-full transform rotate-12"></div>
              </div>
              
              <div class="flex justify-center space-x-1 mt-1">
                <div class="w-2.5 h-8 sm:w-3 sm:h-10 bg-text-primary rounded-full"></div>
                <div class="w-2.5 h-8 sm:w-3 sm:h-10 bg-text-primary rounded-full"></div>
              </div>
              
              <div class="flex justify-center space-x-2 mt-1">
                <div class="w-4 h-2 sm:w-5 sm:h-2.5 bg-accent rounded-full"></div>
                <div class="w-4 h-2 sm:w-5 sm:h-2.5 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="absolute -right-16 sm:-right-20 top-4 sm:top-8">
            <div class="relative">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 rounded-full mb-2 relative">
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 sm:w-14 h-6 sm:h-8 bg-text-primary rounded-t-full"></div>
                <div class="absolute top-4 sm:top-5 left-3 sm:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-text-primary rounded-full"></div>
                <div class="absolute top-4 sm:top-5 right-3 sm:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-text-primary rounded-full"></div>
              </div>
              
              <div class="w-10 h-16 sm:w-12 sm:h-20 bg-accent rounded-lg mx-auto relative">
                <div class="absolute -left-3 top-2 w-6 h-3 sm:w-8 sm:h-4 bg-pink-200 rounded-full transform -rotate-12"></div>
                <div class="absolute -right-3 top-2 w-6 h-3 sm:w-8 sm:h-4 bg-pink-200 rounded-full transform rotate-12"></div>
              </div>
              
              <div class="flex justify-center space-x-1 mt-1">
                <div class="w-2.5 h-8 sm:w-3 sm:h-10 bg-text-primary rounded-full"></div>
                <div class="w-2.5 h-8 sm:w-3 sm:h-10 bg-text-primary rounded-full"></div>
              </div>
              
              <div class="flex justify-center space-x-2 mt-1">
                <div class="w-4 h-2 sm:w-5 sm:h-2.5 bg-accent rounded-full"></div>
                <div class="w-4 h-2 sm:w-5 sm:h-2.5 bg-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Right Side - Content -->
    <div class="w-full lg:w-1/2">
      <!-- About Us Section -->
      <div class="mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-accent mb-6">About Us</h2>
        <p class="text-text-muted text-base sm:text-lg leading-relaxed">
          We're building the future of connected devices with cutting-edge cloud technology and innovative solutions.
        </p>
      </div>

      <!-- Our Mission Section -->
      <div>
        <h3 class="text-2xl sm:text-3xl font-brand-bold text-text-primary mb-8">Our Mission</h3>
        
        <div class="space-y-6">
          <!-- Innovation First -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
              <div class="w-4 h-4 border-2 border-accent rounded flex items-center justify-center">
                <div class="w-1.5 h-1.5 bg-accent rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">Innovation First</h4>
              <p class="text-text-muted text-sm sm:text-base">Pioneering next-generation cloud solutions</p>
            </div>
          </div>

          <!-- Security & Reliability -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
              <div class="w-4 h-1 bg-accent rounded-full"></div>
              <div class="w-4 h-1 bg-accent rounded-full ml-0.5"></div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">Security & Reliability</h4>
              <p class="text-text-muted text-sm sm:text-base">Enterprise-grade protection for your data</p>
            </div>
          </div>

          <!-- Customer Success -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
              <div class="w-4 h-4 border-2 border-accent rounded-full flex items-center justify-center">
                <div class="w-2 h-1 bg-accent rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">Customer Success</h4>
              <p class="text-text-muted text-sm sm:text-base">24/7 support and dedicated account management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- About Us Section End -->

<!-- Features Section Start -->
<section class="bg-neutral-light sm:py-16 lg:py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-6">Features</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
        Everything you need to build, deploy, and scale your IoT solutions with confidence.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      
      <!-- Instant Deployment -->
      <div class="bg-primary rounded-xl p-6 sm:p-8 border border-neutral-lighter shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
        <div class="text-center">
          <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
            <div class="relative">
              <div class="w-8 h-8 bg-accent rounded-lg transform rotate-12"></div>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
            </div>
          </div>
          <h3 class="text-xl sm:text-2xl font-brand-bold text-text-primary mb-4">Instant Deployment</h3>
          <p class="text-text-muted text-sm sm:text-base leading-relaxed">
            Deploy your IoT infrastructure in minutes, not months. Our automated setup gets you running instantly.
          </p>
        </div>
      </div>

      <!-- Global Scale -->
      <div class="bg-primary rounded-xl p-6 sm:p-8 border border-neutral-lighter shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
        <div class="text-center">
          <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
            <div class="relative">
              <div class="w-2 h-8 bg-accent rounded-full"></div>
              <div class="absolute top-1 left-3 w-2 h-6 bg-accent rounded-full"></div>
              <div class="absolute top-2 left-6 w-2 h-4 bg-accent rounded-full"></div>
            </div>
          </div>
          <h3 class="text-xl sm:text-2xl font-brand-bold text-text-primary mb-4">Global Scale</h3>
          <p class="text-text-muted text-sm sm:text-base leading-relaxed">
            Worldwide network of edge servers ensures low latency and high performance for your devices anywhere.
          </p>
        </div>
      </div>

      <!-- Easy Integration -->
      <div class="bg-primary rounded-xl p-6 sm:p-8 border border-neutral-lighter shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
        <div class="text-center">
          <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
            <div class="relative">
              <div class="w-6 h-6 border-2 border-accent rounded-lg flex items-center justify-center">
                <div class="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <div class="absolute -top-1 -right-1 w-4 h-4 border-2 border-accent rounded-full"></div>
            </div>
          </div>
          <h3 class="text-xl sm:text-2xl font-brand-bold text-text-primary mb-4">Easy Integration</h3>
          <p class="text-text-muted text-sm sm:text-base leading-relaxed">
            RESTful APIs, SDKs, and webhooks make integration simple for any development team.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- Features Section End -->

<!-- Product Showcase Section Start -->
<section class="bg-accent/5 py-16 sm:py-20 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      <img src="/images/3.png" class="ml-4 rounded-[20px]" style="width: 50%;" />
      <!-- Right Side - Content -->
      <div class="w-full lg:w-1/2">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-accent mb-6">
          Introducing Station Point Pro
        </h2>
        
        <p class="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
          Our flagship edge computing device that brings cloud intelligence directly to your location. Process data locally, reduce latency, and maintain connectivity even when offline.
        </p>

        <!-- Features List -->
        <div class="space-y-6 mb-8">
          <!-- Advanced Processing Power -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
              <div class="w-4 h-4 border-2 border-accent rounded flex items-center justify-center">
                <div class="w-1.5 h-1.5 bg-accent rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">Advanced Processing Power</h4>
              <p class="text-text-muted text-sm sm:text-base">ARM Cortex-A78 processor with 16GB RAM and 512GB storage</p>
            </div>
          </div>

          <!-- Multi-Protocol Connectivity -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
              <div class="relative">
                <div class="w-4 h-1 bg-accent rounded-full"></div>
                <div class="w-4 h-1 bg-accent rounded-full mt-1"></div>
                <div class="w-4 h-1 bg-accent rounded-full mt-1"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">Multi-Protocol Connectivity</h4>
              <p class="text-text-muted text-sm sm:text-base">Wi-Fi 6, Bluetooth 5.2, LoRaWAN, and cellular support</p>
            </div>
          </div>

          <!-- Industrial Grade Security -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
              <div class="w-4 h-4 border-2 border-accent rounded-lg relative">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-1 bg-accent rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">Industrial Grade Security</h4>
              <p class="text-text-muted text-sm sm:text-base">Hardware security module and tamper-proof design</p>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="px-6 py-3 border-2 border-accent text-accent font-brand-medium rounded-full hover:bg-accent hover:text-primary transition-colors duration-300">
            View Specifications
          </button>
          <button class="px-6 py-3 bg-accent text-primary font-brand-medium rounded-full hover:bg-accent/90 transition-colors duration-300">
            Order Station Point Pro
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Product Showcase Section End -->
<!-- Pricing Section Start -->
<section class="py-16 sm:py-20 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-6">Device Plan</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-3xl mx-auto">
        Choose the perfect plan for your IoT deployment. Scale up or down anytime with no long-term commitments.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
      
      <!-- Basic Plan -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 border border-neutral-lighter shadow-sm relative cursor-pointer transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out group">
        <div class="mb-8">
          <h3 class="text-xl font-brand-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">Basic Plan</h3>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl sm:text-5xl font-brand-bold text-text-primary group-hover:text-accent transition-colors duration-300">$0</span>
            <span class="text-text-muted text-base ml-2">/month</span>
          </div>
          <p class="text-accent text-sm font-brand-medium">Up to 100 devices</p>
        </div>

        <!-- Features List -->
        <div class="space-y-4 mb-8">
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Basic device management</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Standard API access</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Email support</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">1GB data transfer</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Basic analytics</span>
          </div>
        </div>

        <button class="w-full py-3 px-6 bg-accent/10 text-accent font-brand-medium rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-primary group-hover:shadow-md transform group-hover:scale-105 transition-all duration-300">
          Current Plan
        </button>
      </div>

      <!-- Standard Plan - Most Popular -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 border-2 border-accent shadow-lg relative transform scale-105 cursor-pointer hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out group">
        <!-- Most Popular Badge -->
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1 transition-transform duration-300">
          <div class="bg-accent text-primary px-4 py-1 rounded-full text-sm font-brand-medium group-hover:shadow-md transition-shadow duration-300">
            Most Popular
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-brand-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">Standard Plan</h3>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl sm:text-5xl font-brand-bold text-text-primary group-hover:text-accent transition-colors duration-300">$30</span>
            <span class="text-text-muted text-base ml-2">/month</span>
          </div>
          <p class="text-accent text-sm font-brand-medium group-hover:scale-105 transition-transform duration-300">Up to 1,000 devices</p>
        </div>

        <!-- Features List -->
        <div class="space-y-4 mb-8">
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Advanced device management</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Priority API access</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">24/7 chat support</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">10GB data transfer</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Advanced analytics</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Custom integrations</span>
          </div>
        </div>

        <button class="w-full py-3 px-6 bg-accent text-primary font-brand-medium rounded-full hover:bg-accent/90 group-hover:shadow-md transform group-hover:scale-105 transition-all duration-300">
          Choose Plan
        </button>
      </div>

      <!-- Unlimited Plan -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 border border-neutral-lighter shadow-sm relative cursor-pointer transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out group">
        <div class="mb-8">
          <h3 class="text-xl font-brand-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">Unlimited Plan</h3>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl sm:text-5xl font-brand-bold text-text-primary group-hover:text-accent transition-colors duration-300">$120</span>
            <span class="text-text-muted text-base ml-2">per editor/month</span>
          </div>
          <p class="text-accent text-sm font-brand-medium">Unlimited devices</p>
        </div>

        <!-- Features List -->
        <div class="space-y-4 mb-8">
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Full platform access</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Dedicated API endpoints</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Phone & dedicated support</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Unlimited data transfer</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">Custom analytics</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">White-label solutions</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
              <div class="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <span class="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">SLA guarantee</span>
          </div>
        </div>

        <button class="w-full py-3 px-6 bg-accent/10 text-accent font-brand-medium rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-primary group-hover:shadow-md transform group-hover:scale-105 transition-all duration-300">
          Choose Plan
        </button>
      </div>
    </div>
  </div>
</section>
<!-- Pricing Section End -->
<!-- Integrations Section Start -->
<section class="bg-neutral-light py-16 sm:py-20 lg:py-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-6">Seamless Integrations</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-3xl mx-auto">
        Connect with your favorite tools and platforms. Our extensive integration library makes it easy to fit into your existing workflow.
      </p>
    </div>

    <!-- Integration Logos Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
      
      <!-- AWS -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <!-- AWS Logo representation -->
            <div class="text-xl sm:text-2xl font-brand-bold text-orange-400">AWS</div>
            <div class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">AWS</h3>
      </div>

      <!-- Microsoft Azure -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="grid grid-cols-2 gap-1">
            <div class="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-sm"></div>
            <div class="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-sm"></div>
            <div class="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-sm"></div>
            <div class="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-sm"></div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">Microsoft Azure</h3>
      </div>

      <!-- Google -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-blue-500 border-t-red-500 border-r-yellow-500 border-b-green-500"></div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">Google</h3>
      </div>

      <!-- GitHub -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <!-- GitHub cat icon representation -->
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-text-primary rounded-full relative">
              <div class="absolute -top-1 left-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full"></div>
              <div class="absolute -top-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full"></div>
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 sm:w-5 sm:h-2.5 bg-primary rounded-b-full"></div>
            </div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">GitHub</h3>
      </div>
    </div>

    <!-- Second Row - More Integrations -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
      
      <!-- Docker -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <!-- Docker whale representation -->
            <div class="flex space-x-0.5 mb-1">
              <div class="w-2 h-4 sm:w-2.5 sm:h-5 bg-blue-500 rounded-sm"></div>
              <div class="w-2 h-4 sm:w-2.5 sm:h-5 bg-blue-500 rounded-sm"></div>
              <div class="w-2 h-4 sm:w-2.5 sm:h-5 bg-blue-500 rounded-sm"></div>
            </div>
            <div class="w-8 h-2 sm:w-10 sm:h-2.5 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">Docker</h3>
      </div>

      <!-- Kubernetes -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <!-- Kubernetes helm representation -->
            <div class="w-8 h-8 sm:w-10 sm:h-10 border-4 border-blue-500 rounded-full relative">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full"></div>
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 sm:w-1.5 sm:h-4 bg-blue-500"></div>
            </div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">Kubernetes</h3>
      </div>

      <!-- Slack -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <!-- Slack logo representation -->
            <div class="grid grid-cols-2 gap-1 transform rotate-45">
              <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>
              <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
              <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full"></div>
              <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">Slack</h3>
      </div>

      <!-- Zapier -->
      <div class="bg-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-neutral-lighter flex flex-col items-center group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div class="relative">
            <!-- Zapier lightning representation -->
            <div class="w-6 h-8 sm:w-8 sm:h-10 relative">
              <div class="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 transform rotate-45"></div>
              <div class="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 transform rotate-45"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-6 sm:w-1.5 sm:h-8 bg-orange-500"></div>
            </div>
          </div>
        </div>
        <h3 class="text-base sm:text-lg font-brand-semibold text-text-primary group-hover:text-accent transition-colors duration-300 text-center">Zapier</h3>
      </div>
    </div>

    <!-- View All Integrations Button -->
    <div class="text-center mt-12">
      <button class="px-8 py-3 border-2 border-accent text-accent font-brand-medium rounded-full hover:bg-accent hover:text-primary transition-colors duration-300">
        View All Integrations
      </button>
    </div>
  </div>
</section>
<!-- Integrations Section End -->
<!-- Help Center Section Start -->
<section class="py-16 sm:py-20 lg:py-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-6">Help center & Installation Guide</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-3xl mx-auto">
        Get the support you need with our comprehensive documentation and step-by-step guides.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      
      <!-- FAQ Section -->
      <div>
        <h3 class="text-2xl sm:text-3xl font-brand-bold text-text-primary mb-8">Frequently Asked Questions</h3>
        
        <div class="space-y-4">
          <!-- FAQ Item 1 -->
          <div class="bg-primary border border-neutral-lighter rounded-2xl overflow-hidden shadow-sm">
            <button @click="toggleFaq(0)" class="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-light/50 transition-colors duration-200">
              <span class="text-text-primary font-brand-medium pr-4">What happens if I exceed my plan limits?</span>
              <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                <div class="relative">
                  <div class="w-4 h-0.5 bg-text-primary transition-all duration-300"></div>
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-text-primary transition-all duration-300" :class="{ 'opacity-0 scale-0': openFaqs[0] }"></div>
                </div>
              </div>
            </button>
            <div v-show="openFaqs[0]" class="px-6 pb-6 transition-all duration-300">
              <div class="text-text-muted text-sm sm:text-base leading-relaxed">
                We'll notify you before you reach your limits. You can upgrade your plan instantly, or we can work with you on a custom solution for larger deployments.
              </div>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-primary border border-neutral-lighter rounded-2xl overflow-hidden shadow-sm">
            <button @click="toggleFaq(1)" class="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-light/50 transition-colors duration-200">
              <span class="text-text-primary font-brand-medium pr-4">How do I integrate with existing systems?</span>
              <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                <div class="relative">
                  <div class="w-4 h-0.5 bg-text-primary transition-all duration-300"></div>
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-text-primary transition-all duration-300" :class="{ 'opacity-0 scale-0': openFaqs[1] }"></div>
                </div>
              </div>
            </button>
            <div v-show="openFaqs[1]" class="px-6 pb-6 transition-all duration-300">
              <div class="text-text-muted text-sm sm:text-base leading-relaxed">
                Our platform offers RESTful APIs, webhooks, and SDKs for popular programming languages. We also provide extensive documentation and integration guides to help you connect seamlessly.
              </div>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-primary border border-neutral-lighter rounded-2xl overflow-hidden shadow-sm">
            <button @click="toggleFaq(2)" class="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-light/50 transition-colors duration-200">
              <span class="text-text-primary font-brand-medium pr-4">What security measures are in place?</span>
              <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                <div class="relative">
                  <div class="w-4 h-0.5 bg-text-primary transition-all duration-300"></div>
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-text-primary transition-all duration-300" :class="{ 'opacity-0 scale-0': openFaqs[2] }"></div>
                </div>
              </div>
            </button>
            <div v-show="openFaqs[2]" class="px-6 pb-6 transition-all duration-300">
              <div class="text-text-muted text-sm sm:text-base leading-relaxed">
                We implement enterprise-grade security including end-to-end encryption, hardware security modules, regular security audits, and compliance with industry standards like ISO 27001.
              </div>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-primary border border-neutral-lighter rounded-2xl overflow-hidden shadow-sm">
            <button @click="toggleFaq(3)" class="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-light/50 transition-colors duration-200">
              <span class="text-text-primary font-brand-medium pr-4">Can I scale my deployment?</span>
              <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                <div class="relative">
                  <div class="w-4 h-0.5 bg-text-primary transition-all duration-300"></div>
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-text-primary transition-all duration-300" :class="{ 'opacity-0 scale-0': openFaqs[3] }"></div>
                </div>
              </div>
            </button>
            <div v-show="openFaqs[3]" class="px-6 pb-6 transition-all duration-300">
              <div class="text-text-muted text-sm sm:text-base leading-relaxed">
                Yes, our platform is built for scale. You can easily upgrade your plan, add more devices, and expand globally. Our infrastructure automatically scales with your needs.
              </div>
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div class="bg-primary border border-neutral-lighter rounded-2xl overflow-hidden shadow-sm">
            <button @click="toggleFaq(4)" class="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-light/50 transition-colors duration-200">
              <span class="text-text-primary font-brand-medium pr-4">What support options are available?</span>
              <div class="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                <div class="relative">
                  <div class="w-4 h-0.5 bg-text-primary transition-all duration-300"></div>
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-text-primary transition-all duration-300" :class="{ 'opacity-0 scale-0': openFaqs[4] }"></div>
                </div>
              </div>
            </button>
            <div v-show="openFaqs[4]" class="px-6 pb-6 transition-all duration-300">
              <div class="text-text-muted text-sm sm:text-base leading-relaxed">
                We offer multiple support channels including email, 24/7 chat support, phone support for premium plans, comprehensive documentation, and community forums.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Installation Section -->
      <div>
        <h3 class="text-2xl sm:text-3xl font-brand-bold text-text-primary mb-8">Quick Installation</h3>
        
        <div class="space-y-6">
          <!-- Step 1 -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <div class="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <div class="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">1. Create Account</h4>
              <p class="text-text-muted text-sm sm:text-base">Sign up for your free CloudTech account</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <div class="relative">
                <div class="w-6 h-1 bg-accent rounded-full"></div>
                <div class="absolute top-1 left-1 w-4 h-1 bg-accent rounded-full"></div>
                <div class="absolute top-2 left-2 w-2 h-1 bg-accent rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">2. Get API Keys</h4>
              <p class="text-text-muted text-sm sm:text-base">Generate your device authentication keys</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <div class="w-6 h-6 flex items-center justify-center">
                <div class="w-4 h-6 bg-accent rounded transform -rotate-12"></div>
                <div class="absolute w-2 h-2 bg-accent rounded-full transform translate-x-1"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">3. Install SDK</h4>
              <p class="text-text-muted text-sm sm:text-base">Add our SDK to your device code</p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <div class="relative">
                <div class="w-4 h-4 border-2 border-accent rounded-lg"></div>
                <div class="absolute top-1 left-1 w-2 h-2 bg-accent rounded-full"></div>
                <div class="absolute -top-1 -right-1 w-3 h-3 border-2 border-accent rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary mb-2">4. Connect Device</h4>
              <p class="text-text-muted text-sm sm:text-base">Run the connection script and go live</p>
            </div>
          </div>
        </div>

        <!-- Documentation Button -->
        <div class="mt-8">
          <button class="w-full sm:w-auto px-8 py-3 bg-accent text-primary font-brand-medium rounded-full hover:bg-accent/90 transition-colors duration-300">
            View Full Documentation
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Help Center Section End -->

<!-- Contact Support Section Start -->
<section class="bg-neutral-light py-16 sm:py-20 lg:py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-6">Contact Support</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-3xl mx-auto">
        Need help? Our expert support team is here to assist you with any questions or technical issues.
      </p>
    </div>

    <!-- Support Options Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      
      <!-- Live Chat -->
      <div class="bg-primary rounded-2xl shadow-md border border-neutral-lighter hover:shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
        <div class="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <!-- Chat Icon SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h3 class="text-xl sm:text-2xl font-brand-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">Live Chat</h3>
        <p class="text-text-muted text-sm sm:text-base leading-relaxed">
          Get instant help from our support team
        </p>
      </div>

      <!-- Email Support -->
      <div class="bg-primary rounded-2xl shadow-md border border-neutral-lighter hover:shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
        <div class="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <!-- Email Icon SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl sm:text-2xl font-brand-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">Email Support</h3>
        <p class="text-text-muted text-sm sm:text-base leading-relaxed">
          Send us a detailed message
        </p>
      </div>

      <!-- Phone Support -->
      <div class="bg-primary rounded-2xl shadow-md border border-neutral-lighter hover:shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
        <div class="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <!-- Phone Icon SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 class="text-xl sm:text-2xl font-brand-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">Phone Support</h3>
        <p class="text-text-muted text-sm sm:text-base leading-relaxed">
          Speak directly with our experts
        </p>
      </div>

    </div>
  </div>
</section>
<!-- Contact Support Section End -->
<!-- System Status Section Start -->
<section class="py-16 sm:py-20 lg:py-12">
  <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-6">System Status</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-4xl mx-auto">
        Real-time status of all CloudTech services and infrastructure components.
      </p>
    </div>

    <div class="max-w-5xl mx-auto">
      <!-- Service Status Header -->
      <div class="border-b-2 border-accent mb-8 pb-4">
        <h3 class="text-xl sm:text-2xl font-brand text-text-primary text-left ml-4">Service Status</h3>
      </div>

      <!-- Services List -->
      <div class="space-y-4 mb-12">
        <!-- API Gateway -->
        <div class="flex items-center justify-between py-4 border-b border-neutral-lighter">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary">API Gateway</h4>
              <p class="text-sm text-text-muted">operational</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-brand-bold text-text-primary">99.98%</p>
            <p class="text-xs text-text-muted">30-day uptime</p>
          </div>
        </div>

        <!-- Device Management -->
        <div class="flex items-center justify-between py-4 border-b border-neutral-lighter">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary">Device Management</h4>
              <p class="text-sm text-text-muted">operational</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-brand-bold text-text-primary">99.98%</p>
            <p class="text-xs text-text-muted">30-day uptime</p>
          </div>
        </div>

        <!-- Data Processing -->
        <div class="flex items-center justify-between py-4 border-b border-neutral-lighter">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary">Data Processing</h4>
              <p class="text-sm text-text-muted">operational</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-brand-bold text-text-primary">99.98%</p>
            <p class="text-xs text-text-muted">30-day uptime</p>
          </div>
        </div>

        <!-- Analytics Dashboard -->
        <div class="flex items-center justify-between py-4 border-b border-neutral-lighter">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-text-primary">Analytics Dashboard</h4>
              <p class="text-sm text-text-muted">operational</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-brand-bold text-text-primary">99.98%</p>
            <p class="text-xs text-text-muted">30-day uptime</p>
          </div>
        </div>

        <!-- Edge Computing -->
        <div class="flex items-center justify-between py-4 border-b border-neutral-lighter">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-brand-semibold text-yellow-600">Edge Computing</h4>
              <p class="text-sm text-yellow-500">operational</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-brand-bold text-yellow-600">99.98%</p>
            <p class="text-xs text-yellow-400">30-day uptime</p>
          </div>
        </div>
      </div>

      <!-- Summary Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div class="bg-primary rounded-2xl shadow-md border border-neutral-lighter p-8 text-center">
          <p class="text-3xl sm:text-4xl font-brand-bold text-accent mb-2">99.97%</p>
          <p class="text-text-muted font-brand-medium">Overall Uptime</p>
        </div>
        
        <div class="bg-primary rounded-2xl shadow-md border border-neutral-lighter p-8 text-center">
          <p class="text-3xl sm:text-4xl font-brand-bold text-accent mb-2">&lt; 50ms</p>
          <p class="text-text-muted font-brand-medium">Average Response</p>
        </div>
        
        <div class="bg-primary rounded-2xl shadow-md border border-neutral-lighter p-8 text-center">
          <p class="text-3xl sm:text-4xl font-brand-bold text-accent mb-2">0</p>
          <p class="text-text-muted font-brand-medium">Current Incidents</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- System Status Section End -->
<!-- Press & Blogs Section Start -->
<section class="py-16 sm:py-20 lg:py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-brand-bold text-text-primary mb-4">Press & Blogs</h2>
      <p class="text-text-muted text-base sm:text-lg max-w-3xl mx-auto">
        Stay updated with the latest CloudTech news, product announcements, and industry insights.
      </p>
    </div>

    <!-- Blog Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      
      <!-- Blog Item 1 -->
      <div class="relative group cursor-pointer">
        <!-- Blog Image -->
        <div class="relative overflow-hidden rounded-t-2xl">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Person working from home" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        <!-- Overlapping Content Card -->
        <div class="relative -mt-8 mx-4 bg-primary rounded-2xl shadow-lg border border-neutral-lighter p-6 text-center group-hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-brand-bold text-gray-600 mb-4">
            CloudTech Raises $50M Series B to Accelerate IoT Platform Growth
          </h3>
          <button class="flex items-center justify-center space-x-2 text-accent font-brand-medium hover:text-accent/80 transition-colors duration-300 mx-auto">
            <span>Readmore</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Blog Item 2 -->
      <div class="relative group cursor-pointer">
        <!-- Blog Image -->
        <div class="relative overflow-hidden rounded-t-2xl">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Laptop on desk with coffee" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        <!-- Overlapping Content Card -->
        <div class="relative -mt-8 mx-4 bg-primary rounded-2xl shadow-lg border border-neutral-lighter p-6 text-center group-hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-brand-bold text-gray-600 mb-4">
            New Station Point Pro Devices Ship to Enterprise Customers
          </h3>
          <button class="flex items-center justify-center space-x-2 text-accent font-brand-medium hover:text-accent/80 transition-colors duration-300 mx-auto">
            <span>Readmore</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Blog Item 3 -->
      <div class="relative group cursor-pointer">
        <!-- Blog Image -->
        <div class="relative overflow-hidden rounded-t-2xl">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" alt="Hands typing on laptop" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        <!-- Overlapping Content Card -->
        <div class="relative -mt-8 mx-4 bg-primary rounded-2xl shadow-lg border border-neutral-lighter p-6 text-center group-hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-brand-bold text-gray-600 mb-4">
            CloudTech Partners with Major Automotive Manufacturer
          </h3>
          <button class="flex items-center justify-center space-x-2 text-accent font-brand-medium hover:text-accent/80 transition-colors duration-300 mx-auto">
            <span>Readmore</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- Press & Blogs Section End -->
<!-- Footer Section Start -->
<footer class="bg-[#004a42] pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
      
      <!-- Logo and Brand - Takes 2 columns on large screens -->
      <div class="md:col-span-2 lg:col-span-2 flex flex-col justify-between">
        <div>
           <img src="/logo.png" style="width: 40%; margin-bottom: 20px;" class="logo" />

          <!-- <div class="flex items-center mb-4">
            <svg class="w-8 h-8 text-primary mr-2" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="currentColor" />
              <rect x="9" y="9" width="14" height="14" rx="4" fill="white" />
            </svg>
            <span class="text-2xl font-brand-bold text-primary">Station Point</span>
          </div> -->
          <p class="text-primary/80 text-base mb-6 max-w-xs">
            Advanced IoT solutions for critical infrastructure monitoring and control.<br>
            Built by CDI Technologies for the modern utility professional.
          </p>
        </div>
        <div class="mb-6 flex gap-3">
          <button class="bg-primary text-text-primary font-brand-bold rounded-full px-4 py-2 shadow hover:bg-primary/90 transition duration-200">X</button>
          <button class="bg-primary text-text-primary font-brand-bold rounded-full px-4 py-2 shadow hover:bg-primary/90 transition duration-200">Li</button>
          <button class="bg-primary text-text-primary font-brand-bold rounded-full px-4 py-2 shadow hover:bg-primary/90 transition duration-200">yt</button>
        </div>
        <div class="flex items-center text-primary text-sm space-x-2">
          <!-- US Flag SVG -->
          <svg class="w-6 h-4 inline mr-2" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
            <!-- Background -->
            <rect width="24" height="16" fill="#B22234"/>
            <!-- White stripes -->
            <rect width="24" height="1.23" y="1.23" fill="white"/>
            <rect width="24" height="1.23" y="3.69" fill="white"/>
            <rect width="24" height="1.23" y="6.15" fill="white"/>
            <rect width="24" height="1.23" y="8.62" fill="white"/>
            <rect width="24" height="1.23" y="11.08" fill="white"/>
            <rect width="24" height="1.23" y="13.54" fill="white"/>
            <!-- Blue canton -->
            <rect width="9.6" height="8.62" fill="#3C3B6E"/>
            <!-- Stars (simplified as white dots) -->
            <circle cx="1.2" cy="1" r="0.3" fill="white"/>
            <circle cx="2.4" cy="1.6" r="0.3" fill="white"/>
            <circle cx="3.6" cy="1" r="0.3" fill="white"/>
            <circle cx="4.8" cy="1.6" r="0.3" fill="white"/>
            <circle cx="6" cy="1" r="0.3" fill="white"/>
            <circle cx="7.2" cy="1.6" r="0.3" fill="white"/>
            <circle cx="8.4" cy="1" r="0.3" fill="white"/>
            <circle cx="1.8" cy="2.5" r="0.3" fill="white"/>
            <circle cx="3" cy="3.1" r="0.3" fill="white"/>
            <circle cx="4.2" cy="2.5" r="0.3" fill="white"/>
            <circle cx="5.4" cy="3.1" r="0.3" fill="white"/>
            <circle cx="6.6" cy="2.5" r="0.3" fill="white"/>
            <circle cx="7.8" cy="3.1" r="0.3" fill="white"/>
            <circle cx="1.2" cy="4" r="0.3" fill="white"/>
            <circle cx="2.4" cy="4.6" r="0.3" fill="white"/>
            <circle cx="3.6" cy="4" r="0.3" fill="white"/>
            <circle cx="4.8" cy="4.6" r="0.3" fill="white"/>
            <circle cx="6" cy="4" r="0.3" fill="white"/>
            <circle cx="7.2" cy="4.6" r="0.3" fill="white"/>
            <circle cx="8.4" cy="4" r="0.3" fill="white"/>
            <circle cx="1.8" cy="5.5" r="0.3" fill="white"/>
            <circle cx="3" cy="6.1" r="0.3" fill="white"/>
            <circle cx="4.2" cy="5.5" r="0.3" fill="white"/>
            <circle cx="5.4" cy="6.1" r="0.3" fill="white"/>
            <circle cx="6.6" cy="5.5" r="0.3" fill="white"/>
            <circle cx="7.8" cy="6.1" r="0.3" fill="white"/>
            <circle cx="1.2" cy="7" r="0.3" fill="white"/>
            <circle cx="2.4" cy="7.6" r="0.3" fill="white"/>
            <circle cx="3.6" cy="7" r="0.3" fill="white"/>
            <circle cx="4.8" cy="7.6" r="0.3" fill="white"/>
            <circle cx="6" cy="7" r="0.3" fill="white"/>
            <circle cx="7.2" cy="7.6" r="0.3" fill="white"/>
            <circle cx="8.4" cy="7" r="0.3" fill="white"/>
          </svg>
          <span class="font-medium">100% Designed & Built in the USA</span>
        </div>
      </div>

      <!-- Devices - Takes 1 column -->
      <div class="lg:col-span-1">
        <h4 class="font-brand-bold text-primary mb-4 text-base">Devices</h4>
        <ul class="space-y-3 text-primary/80 text-base">
          <li><a href="#" class="hover:text-primary transition">Station Point Solo</a></li>
          <li><a href="#" class="hover:text-primary transition">Station Point Pro</a></li>
          <li><a href="#" class="hover:text-primary transition">Features</a></li>
          <li><a href="#" class="hover:text-primary transition">Pricing</a></li>
          <li><a href="#" class="hover:text-primary transition">Compare Devices</a></li>
        </ul>
      </div>

      <!-- Platform - Takes 1 column -->
      <div class="lg:col-span-1">
        <h4 class="font-brand-bold text-primary mb-4 text-base">Platform</h4>
        <ul class="space-y-3 text-primary/80 text-base">
          <li><a href="#" class="hover:text-primary transition">Cloud Dashboard</a></li>
          <li><a href="#" class="hover:text-primary transition">Mobile App</a></li>
          <li><a href="#" class="hover:text-primary transition">API Documentation</a></li>
          <li><a href="#" class="hover:text-primary transition">Integrations</a></li>
          <li><a href="#" class="hover:text-primary transition">Security</a></li>
        </ul>
      </div>

      <!-- Support - Takes 1 column -->
      <div class="lg:col-span-1">
        <h4 class="font-brand-bold text-primary mb-4 text-base">Support</h4>
        <ul class="space-y-3 text-primary/80 text-base">
          <li><a href="#" class="hover:text-primary transition">Help Center</a></li>
          <li><a href="#" class="hover:text-primary transition">Installation Guide</a></li>
          <li><a href="#" class="hover:text-primary transition">Video Tutorials</a></li>
          <li><a href="#" class="hover:text-primary transition">Contact Support</a></li>
          <li><a href="#" class="hover:text-primary transition">System Status</a></li>
        </ul>
      </div>

      <!-- Company - Takes 1 column -->
      <div class="lg:col-span-1">
        <h4 class="font-brand-bold text-primary mb-4 text-base">Company</h4>
        <ul class="space-y-3 text-primary/80 text-base">
          <li><a href="#" class="hover:text-primary transition">About CDI Technologies</a></li>
          <li><a href="#" class="hover:text-primary transition">Careers</a></li>
          <li><a href="#" class="hover:text-primary transition">Press</a></li>
          <li><a href="#" class="hover:text-primary transition">Partners</a></li>
          <li><a href="#" class="hover:text-primary transition">Blog</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-primary/20 pt-6 mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-primary/80">
      <div class="mb-2 md:mb-0">
        © 2024 CDI Technologies. All rights reserved.
      </div>
      <div class="space-x-6">
        <a href="#" class="hover:text-primary transition">Privacy Policy</a>
        <a href="#" class="hover:text-primary transition">Terms of Service</a>
        <a href="#" class="hover:text-primary transition">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
<!-- Footer Section End -->

</template>

<script setup>
import { ref } from 'vue'

const showMobileMenu = ref(false)
const openFaqs = ref([false, false, false, false, false])

const toggleFaq = (index) => {
  openFaqs.value[index] = !openFaqs.value[index]
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

.logo {
  width: 12%;
}

@media (max-width: 640px) {
  .logo {
    width: 20%;
  }
}
@media (max-width: 400px) {
  .logo {
    width: 25%;
  }
}
#mainimg {
  width: 70%; /* default size */
}

@media (max-width: 768px) {
  #mainimg {
    width: 70%; /* smaller on small screens */
  }
}

</style>
