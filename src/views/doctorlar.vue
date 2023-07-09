<template>
  <div as="nav" class="bg-gray-800" v-if="{ open }">
    <div class="mx-auto sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center m-1 sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/shahsiyklinika">
              <h1 class="text-2xl text-white ml-2">
                Mutahasislik
              </h1>
            </RouterLink>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-2 sm:pr-0">
          <button class="text-white text-xl hidden md:block">
            Sizning Id:U29945
          </button>
          <button
            type="button"
            class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <Button @click="show = !show"
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img class="h-8 w-8 rounded-full"
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
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

  <div class="mx-auto max-w-2xl py-3 sm:py-3 lg:max-w-none lg:py-4">
    <div class="mx-auto max-w-2xl py-3 sm:py-3 lg:max-w-none lg:py-4">
      <h1 class="text-2xl text-black m-5">Bizning doctorlar</h1>
      <div
        class="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTRDb0YPytGBO1pmQuLp_yewWbBHVUbRS77AXCZmxpvjm-T5xoPn9OZpv6xnHWc14AaI&usqp=CAU"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>

        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszZBtH1iTmf4l4fEISp0e7wGIot7fjCNu9w&usqp=CAU"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>

        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://t4.ftcdn.net/jpg/03/16/76/11/360_F_316761139_yVmLRT0AVwpZwOTgpmfrdIKrtFfg0bop.jpg"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>
        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto">
              <div class="flex justify-center">
                <img
                  src="https://img.freepik.com/premium-photo/medical-staff-doctors-concept-young-smiling-female-doctor-healthcare-worker-white-coat-stethoscope-looking-confident-waiting-patients-blue-background_1258-87665.jpg"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>

        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://image.shutterstock.com/image-photo/smiling-female-doctor-lab-coat-260nw-1473042992.jpg"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>

        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://img.freepik.com/premium-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-middle-aged-doctor-white-coat-cross-arms-chest-ready-help-patients-prescribe-medication-smiling-cheerful_1258-61179.jpg?w=2000"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>

        <div class=" ">
          <RouterLink to="/doctorinfo">
            <div
              class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://healthclic.co.uk/wp-content/uploads/Concierege-Doctor.jpeg"
                  class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Anvar Temurov
              </h1>
              <p class="text-xl mx-4 text-teal-700 text-center mb-1">
                export doctor
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bars3Icon from "../components/icons/Bars3icon.vue";
import BellIcon from "../components/icons/BellIcon.vue";
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
