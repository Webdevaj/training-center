<template>
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
            <RouterLink to="/dorixona">
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
                  class=" text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
          class=" text-white block px-3 py-2 rounded-md text-base font-medium" style="background-color: rgb(70, 162, 147)"
          >Dorixona qo'shish</a
        ></RouterLink>   

        <RouterLink to="/doriadd"><a
          href="#"
          class="text-white hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Dori qo'shish</a
        ></RouterLink>
      </div>
    </div>
  </nav>
  <div class="">
    <div class="p-8 text-gray-900 font-extrabold">
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
                placeholder="Dorilarni izlash"
              />
            </div>
          </div>
          <div class="">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Dori darmonlar</h2>

      <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
       
       <RouterLink to="/doriinfo"> <div  class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://apteka.uz/upload/iblock/c49/c493483122b1120d2442a627c550952e.JPG"  class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-900">
                <a >
                  <span
                   class="absolute inset-0"></span>
                  Siofor 
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-900">abletka</p>
            </div>
            <p class="text-sm font-medium text-gray-900">54000 so'm</p>
          </div>
        </div></RouterLink>

        <RouterLink to="/doriinfo">  <div  class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://uzsmart.uz/savol-javob/img/relif-foydalanish-boyicha-korsatmalar-narxlar-haqida.jpg"  class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-900">
                <a >
                  <span
                   class="absolute inset-0"></span>
                  Siofor 
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-900">abletka</p>
            </div>
            <p class="text-sm font-medium text-gray-900">54000 so'm</p>
          </div>
        </div></RouterLink>

        <RouterLink to="/doriinfo">  <div  class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://telegra.ph/file/4cb20c2f7b1a512bcefd4.jpg"  class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-900">
                <a >
                  <span
                   class="absolute inset-0"></span>
                  Siofor 
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-900">abletka</p>
            </div>
            <p class="text-sm font-medium text-gray-900">54000 so'm</p>
          </div>
        </div></RouterLink>

        <RouterLink to="/doriinfo">     <div  class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://apteka.uz/upload/iblock/e4b/e4b49cf729630cf9ec7be26cef12cb4b.png"  class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-900">
                <a >
                  <span
                   class="absolute inset-0"></span>
                  Siofor 
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-900">abletka</p>
            </div>
            <p class="text-sm font-medium text-gray-900">54000 so'm</p>
          </div>
        </div></RouterLink>

        <RouterLink to="/doriinfo">   <div  class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://cdn.beta.qalampir.uz/uploads/5f/m_ifrV2gPm8leoZLmlUybwNXk9nt5qh1.png"  class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-900">
                <a >
                  <span
                   class="absolute inset-0"></span>
                  Siofor 
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-900">abletka</p>
            </div>
            <p class="text-sm font-medium text-gray-900">54000 so'm</p>
          </div>
        </div></RouterLink>
        
      </div>
    </div>
  </div>
</div>
</div>

  </div>
</template>

<script>
</script>
