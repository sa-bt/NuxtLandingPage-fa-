<template>
  <div class="container p-8 mx-auto mt-12">
    <div v-if="items.length == 0" class="text-center mt-20">
      <i class="fa fa-shopping-basket text-9xl"></i>
      <h3 class="text-bold text-2xl mt-4"> سبد خرید شما خالی است</h3>
    </div>
    <div v-else class="w-full overflow-x-auto">
      <div class="my-2">
        <h3 class="text-xl font-bold tracking-wider">سبد خرید</h3>
      </div>
      <table class="w-full shadow-inner">
        <thead>
        <tr class="bg-gray-100">
          <th class="px-6 py-3 font-bold whitespace-nowrap">تصویر</th>
          <th class="px-6 py-3 font-bold whitespace-nowrap">نام محصول</th>
          <th class="px-6 py-3 font-bold whitespace-nowrap">تعداد</th>
          <th class="px-6 py-3 font-bold whitespace-nowrap">قیمت</th>
          <th class="px-6 py-3 font-bold whitespace-nowrap">قیمت کل</th>
          <th class="px-6 py-3 font-bold whitespace-nowrap">حذف</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in items" :key="index">
          <td>
            <div class="flex justify-center">
              <img
                :src="item.image"
                class="object-cover h-28 w-28 rounded-2xl"
                alt="image"
              />
            </div>
          </td>
          <td class="p-4 px-6 text-center whitespace-nowrap">
            <div class="flex flex-col items-center justify-center">
              <h3>{{item.name}}</h3>
            </div>
          </td>
          <td class="p-4 px-6 text-center whitespace-nowrap">
            <div>
              <button @click="decrement(item.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-flex w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                name="qty"
                :value="item.quantity"
                class="w-12 text-center bg-gray-100 outline-none"
              />
              <button @click="increment(item.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-flex w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td class="p-4 px-6 text-center whitespace-nowrap">{{item.price}}</td>
          <td class="p-4 px-6 text-center whitespace-nowrap">{{item.price * item.quantity}}</td>
          <td class="p-4 px-6 text-center whitespace-nowrap">
            <button @click="removeFromCart(item.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="lg:w-2/4">
        <div class="mt-4">
          <div class="px-4 py-4 rounded-md">
            <label class="font-semibold text-gray-600"
            >کد تخفیف:</label
            >
            <input
              type="text"
              placeholder="coupon code"
              value="LARA#234"
              class="
                  w-full
                  px-2
                  py-2
                  border border-blue-600
                  rounded-md
                  outline-none
                "
            />
            <span class="block text-green-600"
            >کد تخفیف منقضی شده است</span
            >
            <button
              class="
                  px-6
                  py-2
                  mt-2
                  text-sm text-indigo-100
                  bg-indigo-600
                  rounded-md
                  hover:bg-indigo-700
                "
            >
              اعمال کد تخفیف
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="py-4 rounded-md shadow">
          <h3 class="text-xl font-bold text-blue-600">جمع فاکتور خرید</h3>
          <div class="flex justify-between px-4">
            <span class="font-bold">جمع کل خرید:</span>
            <span class="font-bold">{{cartTotalAmount}}  تومان</span>
          </div>
          <div class="flex justify-between px-4">
            <span class="font-bold">تخفیف اعمال شده:</span>
            <span class="font-bold text-red-600">- 0 تومان</span>
          </div>
          <div class="flex justify-between px-4">
            <span class="font-bold">مبلغ نهایی:</span>
            <span class="font-bold">{{cartTotalAmount}}  تومان</span>
          </div>
          <div
            class="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
              "
          >
            <span class="text-xl font-bold">مجموع</span>
            <span class="text-2xl font-bold">{{cartTotalAmount}}  تومان</span>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button
          class="
              w-full
              py-2
              text-center text-white
              bg-blue-500
              rounded-md
              shadow
              hover:bg-blue-600
            "
        >
          اتصال به درگاه بانکی
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "cart",
        computed: {
            ...mapGetters({items: 'cart/allProducts'}),
            ...mapGetters({cartTotalAmount: 'cart/totalAmount'}),
        },
        methods: {
            ...mapActions(
                {
                    incrementItem: 'cart/increment',
                    decrementItem: 'cart/decrement',
                    deleteItem: 'cart/delete',
                }),
            increment(id) {
                this.incrementItem(id)
            },
            decrement(id) {
                this.decrementItem(id)
            },
            removeFromCart(id){
                this.deleteItem(id)
            }
        }
    }
</script>

<style scoped>

</style>
