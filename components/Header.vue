<template>
  <header class="shadow-lg">
    <div class="container mx-auto py-2 px-10">
      <nav class="relative flex justify-between items-center">


        <!--Part1-->
        <div class="hidden md:flex items-center">

          <div>
            <button class="btn btn-primary ">عضویت</button>
            <button class="btn btn-secondary mr-2 ">ورود</button>
          </div>

          <div class="mr-7">
            <ul class="flex gap-7">
              <li class="nav-item-active"><a>صفحه اصلی </a></li>
              <div>
                <li
                  class="nav-item "
                  :class="{'nav-item-active' : showProductsMenu}"
                  @click="showProductsMenu = !showProductsMenu"
                ><a> محصولات </a></li>
                <div
                  v-show="showProductsMenu"
                  class="absolute top-11 bg-white border rounded-lg px-6 py-4"

                >
                  <ul class="space-y-3">
                    <li class="hover:text-indigo-600">لورم تست</li>
                    <li class="hover:text-indigo-600">لورم تست</li>
                    <li class="hover:text-indigo-600">لورم لورم تست</li>
                  </ul>
                </div>
              </div>
              <li class="nav-item"><a>درباره ما </a></li>
              <li class="nav-item"><a>تماس با ما </a></li>
            </ul>
          </div>
        </div>


        <div class="md:hidden">
          <span @click="showMenu = !showMenu">menu</span>
          <div v-show="showMenu" class="absolute top-11 bg-white border rounded-lg px-6 py-4 w-full transition duration-2500 ease-in-out transform">

            <div class="">
              <ul class="flex flex-col gap-5 text-center">
                <li class="nav-item-active"><a>صفحه اصلی </a></li>
                <div>
                  <li
                    class=" "
                    :class="{'nav-item-active' : showProductsMenu}"
                    @click="showProductsMenu = !showProductsMenu"
                  ><a> محصولات </a></li>
                  <div
                    v-show="showProductsMenu"
                    class="mx-auto max-w-max bg-white border rounded-lg px-6 py-4"

                  >
                    <ul class="space-y-3">
                      <li class="hover:text-indigo-600">لورم تست</li>
                      <li class="hover:text-indigo-600">لورم تست</li>
                      <li class="hover:text-indigo-600">لورم لورم تست</li>
                    </ul>
                  </div>
                </div>
                <li class=""><a>درباره ما </a></li>
                <li class=""><a>تماس با ما </a></li>
              </ul>
            </div>

            <div class="flex flex-col gap-3 mt-5">
              <button class="btn btn-primary ">عضویت</button>
              <button class="btn btn-secondary ">ورود</button>
            </div>
          </div>
        </div>
        <!--Part2-->
        <div>
          <h2>SABT</h2>

        </div>
      </nav>

    </div>
  </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                showProductsMenu: false,
                showMenu: false
            }
        },
    }
</script>

<style scoped>

</style>
