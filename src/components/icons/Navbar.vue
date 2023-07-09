<template>
  <nav class="bg-gray-800">
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
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4 items-center">
              <!-- Nav links -->
              <RouterLink to="/dorixonaadd"
                ><a
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Dorixona qo'shish</a
                ></RouterLink
              >
              <RouterLink to="/doriadd"
                ><a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const show = ref(false);
const showMenu = ref(false);
function myFunction() {
  console.log("The function is executed.");

  return {
    show,
    myFunction,
    showMenu,
  };
}
</script>
