<template>
  <body>
   <nav class=""  style="background-color: rgb(70, 162, 147)">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            @click="showMenu = !showMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              :class="{ block: !showMenu, hidden: showMenu }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              :class="{ block: showMenu, hidden: !showMenu }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-end sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <!-- Company logo -->
            <RouterLink to="/">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            /></RouterLink>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4 items-center">
              <!-- Nav links -->
              <RouterLink to="/dorixonaadd"
                ><a
                  class="bg-teal-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Dorixona qo'shish</a
                ></RouterLink
              >
              <RouterLink to="/doriadd"
                ><a
                  href="#"
                  class="text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Dori qo'shish</a
                ></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" v-if="showMenu">
      <div class="px-2 pt-2 pb-3 space-y-1">
     <RouterLink to="/dorixonaadd"><a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >Dorixona qo'shish</a
        ></RouterLink>   

        <RouterLink to="/doriadd"><a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Dori qo'shish</a
        ></RouterLink>
      </div>
    </div>
  </nav>
  <div class="">
    <div class="px-4 max-w-3xl mx-auto my-10">
      <img
        class="mx-auto h-16 w-auto my-9"
        src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
        alt="Your Company"
      />
      <div class="t-2 relative flex items-center max-w-2xl m-auto">
        <input
          class="p-2 border border-x-2 border-red-500 w-full rounded-md outline-none"
          type="text"
          v-model="input"
          placeholder="Dorixona izlash"
        />
        <button
          class="absolute right-9 flex items-center"
          @click="showcenter = !showcenter"
        >
          Termez <location class="h-7 w-7 text-blue-600"></location>
        </button>
      </div>
      <div
        class="absolute ml-44 lg:right-96 z-10 mt-2 md:right-96  w-48 origin-top-right rounded-md bg-slate-100 shadow-2xl py-1 shadow-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
        v-if="showcenter"
      >
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Angor
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Sherabod
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Boysun
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Denov
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Qumqurg'on
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Bandixon
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Jarqo'rg'on
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          OLtinsoy
        </p>
        <p class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700">
          Uzun
        </p>
      </div>
    </div>
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://storage.kun.uz/source/6/820bPSC_F-cTGLt1eZXySRJC2SZ-Uhvu.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Nigina aptekasi
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://static.tildacdn.com/tild6433-3530-4331-b737-393837333066/Well_Farm.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Arzon apteka
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://uzpharmagency.uz/uploads/news/70538dc01bb038ea806c1b87737c5f5b.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                muzaffar aptekasi
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://cdn.beta.qalampir.uz/uploads/26/f_d6TS5bkUaWXNbDHvquXjtckiSac2FU.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Farovon Aptekasi
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://www.gazeta.uz/media/img/2019/04/t0K6Vz15543869965507_l.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                apteka +
              </h1>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://clinics.uz/uzb/components/com_mtree/img/listings/s/1847.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Prof med
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://files.medelement.com/uploads/co/738564991527523811/logo/3ec2d00aa83031c19da13f70cd8baedf.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Apteka
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://files.medelement.com/uploads/co/580780291527523143/logo/0ff5fab22f144ab5b0d12fc9f1603195.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Abdulloh aptekasi
              </h1>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div></body>
</template>

<script setup>
import { ref } from "vue";
import Bars3Icon from "../components/icons/Bars3icon.vue";
import BellIcon from "../components/icons/BellIcon.vue";
import XMarkIcon from "../components/icons/XMarkIcon.vue";
import location from "../components/icons/location.vue";


const show = ref(false);
const showcenter = ref(false);
function myFunction() {
  console.log("The function is executed.");

  return {
    show,
    showcenter,
    myFunction,
  };
}
</script>
<style>
body {
  background-image: url("../assets/1212.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
