<template>
  <main class="">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        style="background-color: rgb(70, 162, 147)"
        class="flex items-center justify-between h-14 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 ml-3 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
        </div>

        <div
          class="border rounded-md w-28 p-1 text-center mr-4"
          style="background-color: rgb(87, 199, 195)"
        >
          <RouterLink to="/login">
            <a href="#" class="text-sm font-semibold leading-6  text-white"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </RouterLink>
        </div>
      </nav>
    </header>

    <div class="relative isolate px-2 pt-3 lg:px-2">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ><div class="circle"></div>
   
      </div>
      <div class="mx-auto max-w-2xl pb-3 sm:mt-24">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div class="text-center" data-aos="fade-down">
          <h1
            class="text-2 font-bold tracking-tight text-gray-900 sm:text-5xl mt-32"
          >
            Biz bilan oson toping
          </h1>
          <p class=" text-2xl mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>

      <div class="mx-3 md:flex justify-center gap-10">
        <RouterLink to="/klinika">
          <div class="hover:scale-105 w-full md:w-96 my-10 md:mx-auto" data-aos="fade-right">
            <div
              class="rounded-lg shadow-2xl shadow-gray-900  text-opacity-50 border"
            >
              <div class="flex justify-center">
                <img
                  src="../assets/klinika.png"
                  class="h-44 w-60 mt-3 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center mb-3 text-black">
                Klinikalr
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/dorixona">
          <div class="hover:scale-105 w-full md:w-96 my-10 md:mx-auto" data-aos="fade-left">
            <div
              class="rounded-lg shadow-2xl shadow-gray-900 text-opacity-50 border"
            >
              <div class="flex justify-center">
                <img
                  src="../assets/dorixona.png"
                  class="h-44 w-60 mt-3 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold mb-3 text-center text-black">
                Dorixonalar
              </h1>
            </div>
          </div></RouterLink
        >
      </div>
      

      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
</script>

<style>
main {
  background-image: url("../assets/1212.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
