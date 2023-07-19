<template>
<body>
  <div as="nav" style="background-color:  rgb(43, 119, 43)">
    <div class="mx-auto sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center m-1 sm:items-stretch sm:justify-start"
        >
          <RouterLink to="/">
            <button class="flex flex-shrink-0 gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-12 w-12 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <h1 class="text-white text-center text-xl">Home</h1>
            </button></RouterLink
          >
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-2 sm:pr-0"
        >
          <button class="text-white text-xl hidden md:block">
            Sizning Id:U29945
          </button>
          <button
            type="button"
            class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <Button
                @click="show = !show"
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                    class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700"
                  >
                    sizning profel</a
                  >
                </div>
                <div>
                  <a
                    class="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700"
                    >Settings</a
                  >
                </div>
                <div>
                  <a
                    class="hover:bg-red-700 hover:text-white block px-4 py-2 text-sm text-gray-700"
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

  <div>
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
          placeholder="Klinikka izlash"
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
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://med24.uz/upload/resize_cache/webp/iblock/928/260_170_1/928a3a127ee52f6d24a67af1c3323705.webp"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsGpZTgQ2EdbOgxPZMtC1cpQYrShM6zxJq0m1f1T8CfHobYmrI-k0vzBOL2zc9FxFDvw&usqp=CAU"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://cdn.doctortap.az/uploads/clinic/clinic_20220827113423.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://med24.uz/upload/resize_cache/webp/upload/iblock/44f/44fb6dfa7fb15e7ca84c0514d5d5ad11.webp"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://med24.uz/upload/resize_cache/webp/iblock/71a/100_100_1/71a6179d064b2fed5462541eb3ce9882.webp"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/shahsiyklinika">
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
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://clinics.uz/uzb/components/com_mtree/img/listings/s/771.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiyklinika">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://med24.uz/upload/resize_cache/webp/iblock/928/260_170_1/928a3a127ee52f6d24a67af1c3323705.webp"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Akfa med
              </h1>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</body>
</template>

<script setup>
import { ref } from "vue";
import location from "../components/icons/location.vue";
import Bars3Icon from "../components/icons/Bars3icon.vue";
import BellIcon from "../components/icons/BellIcon.vue";
import XMarkIcon from "../components/icons/XMarkIcon.vue";

const navigation = [
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

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
  background-image: url("../assets/30.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>
