<template>
  <Navbar></Navbar>
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
          placeholder="Klinikka izlash"
        />
      </div>
    </div>
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://storage.kun.uz/source/6/820bPSC_F-cTGLt1eZXySRJC2SZ-Uhvu.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Nigina aptekasi
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://static.tildacdn.com/tild6433-3530-4331-b737-393837333066/Well_Farm.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Arzon apteka
              </h1>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://uzpharmagency.uz/uploads/news/70538dc01bb038ea806c1b87737c5f5b.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                muzaffar aptekasi
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://cdn.beta.qalampir.uz/uploads/26/f_d6TS5bkUaWXNbDHvquXjtckiSac2FU.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Farovon Aptekasi
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://www.gazeta.uz/media/img/2019/04/t0K6Vz15543869965507_l.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                apteka +
              </h1>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/shahsiydorixona">
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
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://files.medelement.com/uploads/co/738564991527523811/logo/3ec2d00aa83031c19da13f70cd8baedf.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Apteka
              </h1>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/shahsiydorixona">
          <div class="hover:scale-110">
            <div
              class="max-h-96 rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
            >
              <div class="flex justify-center">
                <img
                  src="https://files.medelement.com/uploads/co/580780291527523143/logo/0ff5fab22f144ab5b0d12fc9f1603195.jpg"
                  class="h-44 w-60 border-2 mt-3 border-gray-400 rounded-lg p-1"
                  alt=""
                />
              </div>
              <h1 class="mt-1 text-xl font-bold text-center text-black">
                Abdulloh aptekasi
              </h1>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bars3Icon from "../components/icons/Bars3icon.vue";
import BellIcon from "../components/icons/BellIcon.vue";
import XMarkIcon from "../components/icons/XMarkIcon.vue";
import Navbar from "../components/icons/Navbar.vue";

const show = ref(false);
function myFunction() {
  console.log("The function is executed.");

  return {
    show,
    myFunction,
  };
}
</script>
