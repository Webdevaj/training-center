<template>
  <nav
    class=" flex justify-center items-center gap-4 text-black font-bold py-9"
    style="background-color: rgb(70, 162, 147)">
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
          <RouterLink to="/tick"><button   
            type=""
            class="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Kirish
          </button></RouterLink>
        </div>
        <h1 class="text-center mt-3">
          Agar akkauntingiz bo'lmasa:
          <RouterLink to="/auth" class="text-blue-900"
            >Ro'yhatdan o'ting.</RouterLink>
          </h1>
      </form>
      <div  class="flex justify-center mt-10"   v-if="show">
    <svg
    width="115px"
    height="115px"
    viewBox="0 0 133 133"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <g
        id="check-group"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
    >
            <circle
            id="filled-circle"
            fill="#07b481"
            cx="66.5"
            cy="66.5"
            r="54.5"
        />
        <circle
            id="white-circle"
            fill="#FFFFFF"
            cx="66.5"
            cy="66.5"
            r="55.5"
        />
        <circle
            id="outline"
            stroke="#07b481"
            stroke-width="4"
            cx="66.5"
            cy="66.5"
            r="54.5"
        />
        <polyline
            id="check"
            stroke="#FFFFFF"
            stroke-width="5.5"
            points="41 70 56 85 92 49"
        />
    </g>
</svg></div>
    </div>
    
  </div>
</template>
<script setup>
import homeicon from "../components/icons/homeicon.vue";


</script><style>
#check-group {
  animation: 0.32s ease-in-out 1.03s check-group;
  transform-origin: center;
}

#check-group #check {
  animation: 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards check;
  stroke-dasharray: 0, 75px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

#check-group #outline {
  animation: 0.38s ease-in outline;
  transform: rotate(0deg);
  transform-origin: center;
}

#check-group #white-circle {
  animation: 0.35s ease-in 0.35s forwards circle;
  transform: none;
  transform-origin: center;
}

@keyframes outline {
from {
  stroke-dasharray: 0, 345.576px;
}
to {
  stroke-dasharray: 345.576px, 345.576px;
}
}
@keyframes circle {
from {
  transform: scale(1);
}
to {
  transform: scale(0);
}
}
@keyframes check {
from {
  stroke-dasharray: 0, 75px;
}
to {
  stroke-dasharray: 75px, 75px;
}
}
@keyframes check-group {
from {
  transform: scale(1);
}
50% {
  transform: scale(1.09);
}
to {
  transform: scale(1);
}
}
</style>

