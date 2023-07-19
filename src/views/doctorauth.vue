<template>
   <nav
    class="  gap-4 text-white font-bold py-3" style="background-color: rgb(70, 162, 147)"
  > <RouterLink to="/shahsiyklinika"><h1 class=" text-white text-2xl font-bold ml-3">Doctor Auth</h1></RouterLink>
</nav>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-40 border rounded-3xl w-auto"
        src="https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg?w=2000"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Doctor qo'shish
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
          <label
            for="tel"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div class="mt-2">
            <input
              id="tel"
              name="tel"
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
         
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
        <h1 class="text-center mt-3">
          Agar akkauntingiz bo'lsa:
          <RouterLink to="/doctorlogin" class="text-blue-900"
            >Kirish sahifasiga o'ting.</RouterLink
          >
        </h1>
       
      </form>
    </div>
  </div>
  
  <div
    class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 md:hidden border-t-stone-600 rounded-xl"
  >
    <ul class="flex justify-around py-1">
     <RouterLink to="/shahsiyklinika"><li class="hover:text-blue-500 border-blue-500">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span class="text-xs font-medium">Home</span>
        </a>
      </li>
    </RouterLink> 
    <RouterLink to="/appoint">
      <li class="hover:text-blue-500 border-blue-500 text-center">
        <button class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6  mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>

          <span class="text-xs font-medium">Uchrashuv</span>
        </button>
      </li></RouterLink>
      <RouterLink to="/doctorlogin">
      <li class="hover:text-blue-500 border-blue-500">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <span class="text-xs font-medium m-auto"> Doctor Login</span>
        </button>
      </li>
    </RouterLink>
    </ul>
  </div>

</template>
<script setup>
import { ref } from "vue";
import homeicon from "../components/icons/homeicon.vue";

</script>