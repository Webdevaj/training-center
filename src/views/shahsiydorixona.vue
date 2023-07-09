<template>
  <Navbar />
  <div class="bg-white">
    <div class="p-8 text-gray-900 font-extrabold">
        <div class="bg-white">
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
          <div class="bg-white">
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
import Navbar from "../components/icons/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
