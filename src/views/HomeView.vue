<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img
              class="h-16 w-16"
              src="https://cdn-icons-png.flaticon.com/512/759/759232.png"
              alt=""
            />
          </a>
        </div>

        <div class=" border  rounded-xl w-28 p-1 text-center bg-slate-100">
          <RouterLink to="/login">
            <a href="#" class="text-sm font-semibold  leading-6 text-gray-900"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </RouterLink>
        </div>
      </nav>
    </header>

    <div class="relative isolate px-2 pt-3 lg:px-2">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
      <div class="mx-auto max-w-2xl pt-32 pb-3 sm:pt-48 p lg:pt-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Data to enrich your online business
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-9">
          <div
            class="mt-1 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
          >
            <div class="hover:opacity-70 hover:scale-110">
              <p class="text-2xl font-semibold text-black mb-2 ml-5">
                Klinikalar
              </p>
              <RouterLink to="/klinika">
                <img
                  src="https://www.klinika-promienista.com.pl/tmp/2012/03/cropped-Klinika-Promienista-1101.jpg"
                  alt="callout.imageAlt"
                  class="h-64 rounded-lg border border-gray-800 w-full"
              /></RouterLink>
            </div>
            <div class="hover:opacity-70 hover:scale-110">
              <p class="text-2xl font-semibold text-black mb-2 ml-5">
                Dorixonalar
              </p>
              <RouterLink to="/dorixona">
                <img
                  src="https://storage.kun.uz/source/1/XROTzwm_hz914PGNFtjI6yQiiwQ3wM8U.jpg"
                  alt="callout.imageAlt"
                  class="w-full h-64 border border-gray-800 rounded-lg"
              /></RouterLink>
            </div>
            <div class="hover:opacity-70 hover:scale-110">
              <p class="text-2xl font-semibold text-black mb-2 ml-5">
                Navbatlar
              </p>
              <RouterLink to=" /navba"
                ><img
                  src="https://www.gazeta.uz/media/img/2022/08/4WBSB416594491134469_b.jpg"
                  alt="callout.imageAlt"
                  class="h-64 rounded-lg border border-gray-800 w-full"
              /></RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
