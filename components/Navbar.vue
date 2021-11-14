<template>
  <header class="shadow-lg">
    <div class="container mx-auto py-2 px-10">
      <nav class="relative flex justify-between items-center">


        <!--Part1-->
        <div class="hidden md:flex items-center">

          <div class="flex">
            <NuxtLink :to="{name:'auth-login'}" class="btn btn-primary">ورود</NuxtLink>
            <NuxtLink :to="{name:'auth-register'}" class="btn btn-secondary">عضویت</NuxtLink>
            <div class="relative mx-2">
              <span class="rounded-full font-xs bg-red-600 leading-0 absolute top-0 right-0 text-sm px-1 py-2 text-white">{{count}}</span>
              <NuxtLink :to="{name:'cart'}" class=""><i class="fa fa-shopping-cart text-2xl px-2.5"></i></NuxtLink>
            </div>

          </div>

          <div class="mr-7">
            <ul class="flex gap-7">
              <li>
                <NuxtLink :to="{name:'index'}" class="nav-item-active">صفحه اصلی</NuxtLink>
              </li>

              <div>
                <li
                  class="nav-item "
                  :class="{'nav-item-active' : showProductsMenu}"
                  @click="showProductsMenu = !showProductsMenu"
                ><NuxtLink :to="{name:'products'}"> محصولات
                  <i class="fas fa-chevron-down text-xs"></i></NuxtLink></li>
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
              <li class="nav-item"><NuxtLink :to="{name:'panel-dashboard'}">داشبورد </NuxtLink></li>
            </ul>
          </div>
        </div>


        <div class="md:hidden">
          <div @click="showMenu = !showMenu"><i class="fas fa-bars text-xl"></i></div>
          <transition name="fade">
            <div v-show="showMenu"
                 class="absolute top-8 bg-white border rounded-lg px-6 py-4 w-full transition duration-2500 ease-in-out transform">

              <div class="">
                <ul class="flex flex-col gap-5 text-center">
                  <li>
                    <NuxtLink :to="{name:'index'}">صفحه اصلی</NuxtLink>
                  </li>
                  <div>
                    <li
                      class=" "
                      @click="showProductsMenu = !showProductsMenu"
                    ><a> محصولات
                      <i class="fas fa-chevron-down text-xs"></i></a></li>
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
                <NuxtLink :to="{name:'auth-login'}" class="btn btn-primary">ورود</NuxtLink>
                <NuxtLink :to="{name:'auth-register'}" class="btn btn-secondary">عضویت</NuxtLink>
              </div>
            </div>
          </transition>
        </div>

        <!--Logo-->
        <div class="flex">
          <ColorModePicker/>
          <h2 class="text-2xl font-bold">SABT</h2>
        </div>
      </nav>

    </div>
  </header>
</template>

<script>
    import ColorModePicker from "./ColorModePicker";
    import {mapGetters,mapActions} from 'vuex'

    export default {
        name: "Navbar",
        components: {ColorModePicker},
        data() {
            return {
                showProductsMenu: false,
                showMenu: false,
            }
        },
        computed: {
            ...mapGetters({count: 'cart/count'})
        },
        mounted(){
            this.setInitialCart();
        },
        methods: {
            ...mapActions({setCart: 'cart/setCart'}),
            changeMode() {
                this.$colorMode.preference =
                    this.$colorMode.preference === 'light' ? 'dark' : 'light'
            },
            setInitialCart(){
                let cart = localStorage.getItem('cart')
                if (cart){
                    this.setCart(cart);
                }
            }
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
