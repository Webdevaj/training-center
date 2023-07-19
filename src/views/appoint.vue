<template>
  <div  class="" style="background-color: rgb(70, 162, 147)">
    <div class="mx-auto sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center m-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/shahsiyklinika">
            <h1 class="text-2xl text-white ml-2">Uchrashuvlar</h1></RouterLink>
          </div>
          <div class="hidden sm:ml-6 sm:block my-auto">
            <div class="flex space-x-4 items-center">
              <div>
                <RouterLink to="/shahsiyklinika">
                  <a
                    class="text-white hover:bg-teal-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                    >Home
                  </a></RouterLink
                >
              </div>
              <div>
                <RouterLink to="/appoint">
                  <a
                    class="text-white hover:bg-teal-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                    >Uchrashuv
                  </a></RouterLink
                >
              </div>
              <div>
                <RouterLink to="/doctorlogin"
                  ><a
                    class="text-white hover:bg-teal-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  >
                    Doctor Login
                  </a></RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-2 sm:pr-0"
        >
          <button class="text-white text-xl hidden md:block">
            Sizning Id:U29945
          </button>
          <button
            type="button"
            class="rounded-full bg-teal-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <Button
                @click="show = !show"
                class="flex rounded-full bg-teal-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://media.licdn.com/dms/image/C4D03AQGMYolnVBZ-mw/profile-displayphoto-shrink_800_800/0/1598350333095?e=2147483647&v=beta&t=S57iTYTDpNztpZhEtZ66cs22OsLQSuoK7gkGwGZZ7t4"
                  alt=""
                />
              </Button>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                v-if="show"
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="bg-gray-400 flex justify-center items-center">
                  <a href="#" class="block px-4 py-2 text-sm"> ID:U29945</a>
                  <span> 0 so'm</span>
                </div>
                <div>
                  <a
                    href="#"
                    class="hover:bg-gray-200 block px-4 py-2 text-sm text-teal-700"
                  >
                    sizning profel</a
                  >
                </div>
                <div>
                  <a
                    class="hover:bg-gray-200 block px-4 py-2 text-sm text-teal-700"
                    >Settings</a
                  >
                </div>
                <div>
                  <a
                    class="hover:bg-red-700 hover:text-white block px-4 py-2 text-sm text-teal-700"
                    >Sign out</a
                  >
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-3 sm:py-8 lg:max-w-none lg:py-3">

      <div
        class="border shadow shadow-teal-700 bg-slate-50 rounded-2xl w-auto h-auto bg-"
      >
        <div class="m-4">
          <img src="https://cdn.dayschedule.com/img/solutions/doctor-appointment-booking-calendar-app.png" 
          class=" h-52 mx-auto w-60 border-b-2 border-teal-800">
          <h1 class="mt-6 text-center text-lg">
            Sizda hech qanday uchrashuv yo'q
          </h1>
          <p class="text-center">
            mutahasis tanlang
           <RouterLink to="/shahsiyklinika"><button class="text-sky-700 text-lg">kirish --></button></RouterLink> 
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 md:hidden border-t-stone-600 rounded-xl"
  >
    <ul class="flex justify-around py-1">
      <RouterLink to="/shahsiyklinika"
        ><li class="hover:text-blue-500 border-blue-500">
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
              class="w-6 h-6 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            <span class="text-xs font-medium">Uchrashuv</span>
          </button>
        </li></RouterLink
      >
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
import Bars3Icon from "../components/icons/Bars3icon.vue";
import BellIcon from "../components/icons/BellIcon.vue";
import XMarkIcon from "../components/icons/XMarkIcon.vue";

const navigation = [
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const show = ref(false);
function myFunction() {
  console.log("The function is executed.");

  return {
    show,
    myFunction,
  };
}
</script>
