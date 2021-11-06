<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">

    <!--Card-->
    <div v-for="product in products" class="rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="product.image" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{product.name}}</div>
        <p class="text-base text-justify">
          {{product.description}} </p>
      </div>
      <div class="font-bold text-xl mb-2 text-center ">{{product.price}} <span class="text-lg">تومان</span></div>
      <div class="px-6 pt-4 pb-2 flex justify-between">
        <button class="btn btn-primary" @click="addToCart(product)">اضافه کردن به سبد خرید</button>
        <button class="btn btn-secondary"> استار</button>
        <!--        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>-->
      </div>
    </div>


  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "index",
        computed: {
            ...mapGetters({products: 'products/allProducts'})
        },
        mounted() {
            this.setInitialCart();
        },
        methods: {
            ...mapActions({add: 'carts/addToCart'}),
            ...mapActions({setCart: 'carts/setCart'}),
            addToCart(product) {
                this.add(product)
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

</style>
