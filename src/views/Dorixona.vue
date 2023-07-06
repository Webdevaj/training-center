<template>
  <nav
    class="bg-teal-600 flex justify-end items-center gap-4 text-white font-bold py-9"
  >
    <RouterLink class="absolute left-11" to="/">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class=" w-10 h-10"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
    </RouterLink>
    <div
      class="border-2 group absolute  hover:bg-slate-400 w-44 py-1 mr-5 rounded-lg bg-white text-center border-red-700"
    >
      <button class="text-black" @click="
      showtext = !showtext">Dorixona qo'shish</button>
    </div>
  </nav>

  <div class="px-4 max-w-4xl mx-auto my-10">
    
    <div class="px-4 max-w-3xl mx-auto my-10">
    <img
      class="mx-auto h-16 w-auto my-9"
      src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
      alt="Your Company"
    />
    <div class="t-2 relative flex items-center">
      <button class="absolute right-1 w-24 rounded flex bg-slate-200">
        <location class="w-8 h-8"> </location>
        <p>Termiz</p>
      </button>
      <input
        class="p-2 border border-x-2 border-red-500 w-full rounded-md outline-none"
        type="text"
        v-model="input"
        placeholder="Dorixona izlash."
      />
    </div>

    <div class="col-span-2 lg:col-span-1 m-6 mt-10" v-if="showtext">
        <div
    class="flex min-h-full flex-1 flex-col justify-center px-2 py-2 lg:px-3  border-2 border-teal-600 rounded-md"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
     
      <h2
        class="mt-4 text-center text-4xl font-bold leading-9 tracking-tight text-teal-700"
      >
        Band qilish
      </h2>
    </div>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <label
          for="name"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Ismingiz
        </label>
        <div class="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            autocomplete="name"
            class="block w-full rounded-md border-2 border-teal-600 py-1.5 shadow-sm  ring-1 ring-inset focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label
            for="tel"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Telefon
          </label>
          <div class="mt-2">
            <input
              id="tel"
              name="tel"
              type="tel"
              autocomplete="tel"
              class="block w-full rounded-md border-2 border-teal-600 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="email"
              autocomplete="current-password"
              class="block w-full rounded-md border-2 border-teal-600 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-7F00 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
        
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Klinika nomi</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="text"
              autocomplete="current-password"
              class="block w-full rounded-md border-2 border-teal-600 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-7F00 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div > 
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign in
          </button>
        </div>

      </form>
    </div>
  </div>
 

  
       
      </div>

    

    <RouterLink to="/shahsiydorixona">
      <div
        class="border border-teal-600 rounded-lg my-9 hover:scale-95 py-4 px-4"
      >
        <span class="">
          <p class="text-center">Humo med center</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
            alt="rasm"
            class="h-14 w-14 border border-gray-800 rounded-md px-2 inline-block py-2"
          />
          <h1>Humo med</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur iusto non aperiam. Perferendis asperiores rerum hic
            impedit non voluptas enim assumenda ab. Dolore harum a quis aliquam
            numquam illo pariatur.
          </p>
        </span>
      </div></RouterLink
    >

    <RouterLink to="/shahsiydorixona">
      <div
        class="border border-teal-600 rounded-lg my-9 hover:scale-95 py-4 px-4"
      >
        <span class="">
          <p class="text-center">Humo med center</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
            alt="rasm"
            class="h-14 w-14 border border-gray-800 rounded-md px-2 inline-block py-2"
          />
          <h1>Humo med</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur iusto non aperiam. Perferendis asperiores rerum hic
            impedit non voluptas enim assumenda ab. Dolore harum a quis aliquam
            numquam illo pariatur.
          </p>
        </span>
      </div></RouterLink
    >

    <RouterLink to="/shahsiydorixona">
      <div
        class="border border-teal-600 rounded-lg my-9 py-4 hover:scale-95 px-4"
      >
        <span class="">
          <p class="text-center">Humo med center</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
            alt="rasm"
            class="h-14 w-14 border border-gray-800 rounded-md px-2 inline-block py-2"
          />
          <h1>Humo med</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur iusto non aperiam. Perferendis asperiores rerum hic
            impedit non voluptas enim assumenda ab. Dolore harum a quis aliquam
            numquam illo pariatur.
          </p>
        </span>
      </div></RouterLink
    >

    <RouterLink to="/shahsiydorixona">
      <div
        class="border border-teal-600 rounded-lg my-9 py-4 hover:scale-95 px-4"
      >
        <span class="">
          <p class="text-center">Humo med center</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
            alt="rasm"
            class="h-14 w-14 border border-gray-800 rounded-md px-2 inline-block py-2"
          />
          <h1>Humo med</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur iusto non aperiam. Perferendis asperiores rerum hic
            impedit non voluptas enim assumenda ab. Dolore harum a quis aliquam
            numquam illo pariatur.
          </p>
        </span>
      </div></RouterLink
    >
  </div>

   
    


    
  </div>
</template>
<script >
import homeicon from "../components/icons/homeicon.vue";
import location from "../components/icons/location.vue";
export default{
  data: ()=>{
    return{
      showtext: false
    }
  }
}
</script>