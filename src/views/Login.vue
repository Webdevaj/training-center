<template>
  <nav
    class="bg-gray-800 flex justify-center items-center gap-4 text-black font-bold py-9"
  >
    <RouterLink class="absolute left-11" to="/">
      <homeicon class="w-10 h-10 text-white"></homeicon>
    </RouterLink> 
    
    
  </nav>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Akauntizni kiriting
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
      
        
        <div>
          <label
            for="tel"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="tel"
              class="block w-full rounded-md border-0 py-1.5 outline-blue-600 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Parol</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 outline-blue-600 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-7F00 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Kirish
          </button>
        </div>
        <h1 class="text-center mt-3">
          Agar akkauntingiz bo'lmasa:
          <RouterLink to="/auth" class="text-blue-900"
            >Ro'yhatdan o'ting.</RouterLink>
          </h1>
      </form>
    </div>
  </div>
</template>
<script setup>
import homeicon from "../components/icons/homeicon.vue";
</script>
