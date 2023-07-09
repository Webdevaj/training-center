<template>
  <div as="nav" class="bg-gray-800">
    <div class="mx-auto sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center m-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/doctorlar"
              ><h1 class="text-2xl text-white ml-2">Doctor</h1></RouterLink
            >
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

  <div
    class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
  >
    <div>
      <div
        class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
      >
        <div
          class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
        >
          <div
            class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
          >
            <div
              class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                alt="product.imageAlt"
                class="w-full border rounded-xl h-60"
              />
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                Alisher Norboyev
              </h2>
              <p>Doctor dentist</p>

              <p class="text-2xl text-gray-900">500$</p>

              <div class="mt-6">
                <p class="text-gray-900">about:</p>
                <div class="flex">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo veniam voluptas excepturi assumenda laboriosam
                    molestiae.
                  </p>
                </div>
                <div class="p-4">
                  <Calendar  :year="2023" month="July"></Calendar>
                </div>
              </div>

              <form>
               

                <RouterLink to="/login"
                  ><button
                    type="submit"
                    class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Band qilish
                  </button></RouterLink
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Calendar from "../components/icons/Calendar.vue";

import XMarkIcon from "../components/icons/XMarkIcon.vue";
const show = ref(false);
function myFunction() {
  console.log("The function is executed.");

  return {
    show,
    myFunction,
  };
}
</script>
