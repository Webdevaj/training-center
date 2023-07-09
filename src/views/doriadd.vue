<template>
  <div as="nav" class="bg-gray-800">
    <div class="mx-auto sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center m-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/shahsiydorixona"
              ><h1 class="text-2xl text-white ml-2">Dorilar</h1></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <form class="mx-3 md:mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
        alt="Your Company"
      />
      <h2
        class="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Dorini kiriting
      </h2>
    </div>
    <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
      <div>
        <label class="block text-sm font-semibold leading-6 text-gray-900">
          Dorining nomi
        </label>
        <div class="mt-2.5">
          <input
            type="text"
            class="block outline-none w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label class="block text-sm font-semibold leading-6 text-gray-900">
          Turi
        </label>
        <div class="mt-2.5">
          <input
            type="text"
            class="block outline-none w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label class="block text-sm font-semibold leading-6 text-gray-900">
          Narxi
        </label>
        <div class="mt-2.5">
          <input
            type="number"
            class="block outline-none w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="col-span-full">
        <label
          for="about"
          class="block text-sm font-medium leading-6 text-gray-900"
          >About</label
        >
        <div class="mt-2">
          <textarea
            id="about"
            name="about"
            rows="3"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>

      <div class="col-span-full">
        <label
          for="cover-photo"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Dorining rasmi</label
        >
        <div
          class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
        >
          <div class="text-center">
            <PhotoIcon
              class="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-2">
      <button
        class="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6 bg-blue-900 text-white"
      >
        Saqlash
      </button>
    </div>
  </form>
</template>
