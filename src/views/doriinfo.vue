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
                src="https://www.savol-javob.com/wp-content/uploads/2020/09/maltofer-anemiya1-300x190.jpg"
                alt="product.imageAlt"
                class="w-full border rounded-xl h-60"
              />
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                Maltofer
              </h2>
              <p>Tabletka</p>

              <p class="text-2xl text-gray-900">43000 so'm</p>

              <div class="mt-6">
                <p class="text-gray-900">about:</p>
                <div class="flex">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo veniam voluptas excepturi assumenda laboriosam
                    molestiae.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
