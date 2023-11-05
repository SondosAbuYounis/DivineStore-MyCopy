import React from 'react'

export const ProductSliderHome = () => {
  return (
    <>
   
  <img src="https://static.wixstatic.com/media/c837a6_938269b105e04d2c8a3462e43263ecf4~mv2.jpg/v1/fill/w_980,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_938269b105e04d2c8a3462e43263ecf4~mv2.jpg" alt="" width="980" height="764" className="width: 980px; height: 764px; object-fit: cover; object-position: 50% 50%;" fetchpriority="high"/>

  <div id="default-carousel" class="relative w-full" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}hiiiiiiiiii
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={logoDIVINEwhite} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 2 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 3 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={logoDIVINEwhite} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 4 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={logoDIVINEwhite} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
          {/* <!-- Item 5 --> */}
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={logoDIVINEwhite} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
          </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span class="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span class="sr-only">Next</span>
          </span>
      </button>
  </div>
  </>
  )
}
