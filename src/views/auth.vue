<template>
  <div class="py-9 bg-teal-700 flex items-center justify-center">
    <RouterLink class="absolute left-11" to="/">
      <homeicon class="w-11 h-11 text-white"></homeicon>
    </RouterLink>
    
  </div>
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
        Foydalanuvchi yaratish
      </h2>
      <h1 class="text-center mb-2 mt-3 font-bold">Iltimos parolni unitmang</h1>
    </div>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent class="space-y-6">
        <div>
          <label
            for="tel"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Ismingiz</label
          >
          <div class="mt-2 relative flex items-center">
            <input
              type="text"
              class="outline-none pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="name"
            />
          </div>
        </div>
        <div>
          <label
            for="tel"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Telefon raqami</label
          >
          <div class="mt-2 relative flex items-center">
            <p class="absolute left-1">+998</p>
            <input
              id=""
              name="tel"
              type="tel"
              autocomplete="tel"
              required=""
              class="outline-none pl-11 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="phone"
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

          <div class="mt-2 relative flex items-center">
            <input
              :type="showpassword1 ? 'text' : 'password'"
              autocomplete="current-password"
              required=""
              class="pl-4 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="password"
            />
            <button
              @click="showpassword1 = !showpassword1"
              class="absolute right-1"
            >
              <eye v-if="showpassword1" class="w-6 h-6"></eye>
              <eyeSlash v-else class="w-6 h-6"></eyeSlash>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Parolni takrorlash</label
            >
          </div>

          <div class="mt-2 relative flex items-center">
           
            <input
              :type="showpassword2 ? 'text' : 'password'"
              autocomplete="current-password"
              required=" "
              class="pl-4 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="password2"
            /> <button
              @click="showpassword2 = !showpassword2"
              class="absolute right-1"
            >
              <eye v-if="showpassword2" class="w-6 h-6"></eye>
              <eyeSlash v-else class="w-6 h-6"></eyeSlash>
            </button>
          </div>
        </div>
        <div>
          <button
            @click="foo()"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
        <h1 class="text-center mt-3">
          Agar akkauntingiz bo'lsa:
          <RouterLink to="/login" class="text-blue-900"
            >Krish sahifasiga o'ting.</RouterLink
          >
        </h1>
        <h1 v-if="parol" class="text-red-500 text-2xl font-bold text-center">
          Parollar birxil emas!
        </h1>
        <h2 v-if="telefon" class="text-red-500 text-2xl font-bold text-centers">
          Telefon raqam avval ro'yxatga olingan.
        </h2>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import homeicon from "../components/icons/homeicon.vue";

</script>