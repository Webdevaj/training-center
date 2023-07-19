<template>
  <div as="nav" class=" fixed z-50 top-0 w-full" v-if="{ open }" style="background-color: rgb(70, 162, 147)" >
    <div class="mx-auto  sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center m-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/klinika">
            <img
              class="h-12 w-12 rounded-full"
              src="https://clinics.uz/uzb/components/com_mtree/img/listings/m/2519.jpg"
              alt=""
            /></RouterLink>
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

  <div class="">
    <div class="px-4 max-w-6xl mx-auto my-20">
      <img
        class="mx-auto h-16 w-auto my-9"
        src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
        alt="Your Company"
      />
      <div class="t-2  flex items-center max-w-2xl m-auto">
        <input
          class="p-2 border border-x-2 border-red-500 w-full rounded-md outline-none"
          type="text"
          v-model="input"
          placeholder="doctor izlash"
        />
      </div>
      <div class=" mt-10">
        
        <swiper
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :modules="[Autoplay]"
        >
          <swiper-slide>
            <div class="  ">
              <img
                src="https://c8y.doxcdn.com/image/upload/c_fill,fl_progressive,h_800,q_auto,w_1600/a1lqhdn2xeb4tsnztntz.webp"
                alt=""
                class="h-48 border mx-auto lg:max-w-2xl rounded-2xl w-full"
              /></div
          ></swiper-slide>
          <swiper-slide
            ><div class="border h-48 mx-auto w-full lg:max-w-2xl rounded-2xl">
              <img
                src="https://c8y.doxcdn.com/image/upload/c_fill,fl_progressive,h_800,q_auto,w_1600/eaow4d324t5myrylzuzw.webp"
                alt=""
                class="border h-48 mx-auto w-full lg:max-w-2xl rounded-2xl"
              /></div
          ></swiper-slide>
          <swiper-slide
            ><div class="border h-48 mx-auto w-full lg:max-w-2xl rounded-2xl">
              <img
                src="https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg"
                alt=""
                class="border h-48 mx-auto w-full lg:max-w-2xl rounded-2xl"
              /></div
          ></swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl  sm:py-8 lg:max-w-none lg:py-3">
        <p class="text-2xl m-1">Belgilangan uchrashuvlar</p>
        <div
          class="border shadow shadow-gray-700 bg-slate-50 rounded-2xl w-auto h-auto bg-"
        >
          <div class="m-4">
            <h1 class="mt-6 text-center text-lg">
              Sizda hech qanday uchrashuv yo'q
            </h1>
            <p class="text-center">
              mutahasis tanlang
              </p>
          </div>
        </div>

        
      </div>

      <div class="mx-auto max-w-2xl py-3 sm:py-3 lg:max-w-none lg:py-4">
    <div class="mx-auto max-w-2xl py-3 sm:py-3 lg:max-w-none lg:py-4">
      <h1 class="text-2xl text-black m-5">Mutahasislik</h1>
      <div
        class="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
             <RouterLink to="/doctorlar"><img
                src="https://cdn2.iconfinder.com/data/icons/teeth-and-dentist/100/_-3-512.png"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink> 
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Dentist
            </h1>
           
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
             <RouterLink to="/doctorlar"><img
                src="https://dunyo.info/uploads/post/1611248710.6417.jpg"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink> 
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Kardiyalogiya
            </h1>
            
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
             <RouterLink to="/doctorlar"><img
                src="https://dunyo.info/uploads/post/1611248710.6417.jpg"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink> 
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Kardiyalogiya
            </h1>
            
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
             <RouterLink to="/doctorlar"><img
                src="https://w7.pngwing.com/pngs/621/257/png-transparent-obstetrics-and-gynaecology-obstetrics-and-gynaecology-clinic-hospital-obstetrics-s-purple-blue-text.png"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink> 
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              genicolik
            </h1>
            
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
              <RouterLink to="/doctorlar"> <img
                src="https://www.shutterstock.com/image-vector/man-confused-about-pimples-on-260nw-1739212946.jpg"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink>
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Teri kasaligi
            </h1>
            
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
              <RouterLink to="/doctorlar">   <img
                src="https://cdn-icons-png.flaticon.com/512/4006/4006204.png"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink>
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Urologist
            </h1>
            
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
              <RouterLink to="/doctorlar"> <img
                src="https://w7.pngwing.com/pngs/244/518/png-transparent-eye-icon-eye-service-people-logo.png"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink>
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Ko'z parvarish
            </h1>
            
          </div>
        </div>
        <div class=" ">
          <div
            class="h-auto rounded-lg shadow-lg shadow-neutral-400 bg-slate-50 border w-auto"
          >
            <div class="flex justify-center">
              <RouterLink to="/doctorlar">  <img
                src="https://cdn3.vectorstock.com/i/1000x1000/43/87/dermatology-icon-vector-38224387.jpg"
                class="h-44 w-auto border-2 mt-3 border-gray-400 rounded-lg p-1"
                alt=""
              /></RouterLink>
            </div>
            <h1 class="mt-1 text-xl mb-2 font-bold text-center text-black">
              Dermatalogiya
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="my-9 shadow-lg shadow-slate-600">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4278539857255!2d69.20623397595496!3d41.34305317130553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c1195f1758b%3A0x4121fc2683e499ca!2sAkfa%20Medline!5e0!3m2!1sen!2s!4v1688472082188!5m2!1sen!2s"
        class="w-full h-96"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bars3Icon from "../components/icons/Bars3icon.vue";

import XMarkIcon from "../components/icons/XMarkIcon.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const show = ref(false);
function myFunction() {
  console.log("The function is executed.");

  return {
    show,
    myFunction,
  };
}
</script>
<style>
body {
  background-image: url("../assets/1212.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
