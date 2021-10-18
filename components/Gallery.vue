<template>
  <section class="mt-24">
    <div class="container mx-auto py-4 px-10 lg:px-20 lg:w-4/5">
      <div class="text-center mb-12">
        <h1 class="text-2xl font-bold mb-5">لورم ایپسوم </h1>
        <p class=" leading-8 mb-6 ">لورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن
          ساختگی لورم ایسوم متن ساختگی لورم ایسوم متن ساختگی است</p>
      </div>

      <div>
        <ul class="flex justify-center">
          <li
            @click="tabActive = 'all'"
            class="px-4 py-2 cursor-pointer "
            :class="tabActive=='all' &&'border-b-4'" >همه
          </li>
          <li
            v-for="(tab, index) in tabs"
            :key="index"
            @click="tabActive = tab.category"
            class="px-4 py-2 cursor-pointer "
            :class="tabActive==tab.category &&'border-b-4'"
          >{{tab.display_category}}
          </li>
        </ul>
        <div v-for="(tab, index) in tabs"
             :key="index"
             v-show="tabActive==tab.category"
             class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mt-5">
          <div
            v-for="(image, index) in tab.images"
            :key="index"
            class="">
            <img
              class="rounded-lg" :src="image" alt="">
          </div>
        </div>
        <div v-if="tabActive == 'all'"
             class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mt-5">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="grid gap-y-5">
            <div
              v-for="(image, index) in tab.images"
              :key="index"
              class="">
              <img
                class="rounded-lg "
                :src="image" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>

    <!--Photos-->

  </section>

</template>

<script>
    export default {
        name: "Gallery",
        data() {
            return {
                tabActive: 'all',
                tabs: [
                    {
                        "category": "nature",
                        "display_category": "طبیعت",
                        "images": [
                            "images/nature/img_1.jpg",
                            "images/nature/img_2.jpg",
                            "images/nature/img_3.jpg",
                            "images/nature/img_4.jpg",
                        ]
                    },
                    {
                        "category": "technology",
                        "display_category": "تکنولوژی",
                        "images": [
                            "images/technology/img_1.jpg",
                            "images/technology/img_2.jpg",
                            "images/technology/img_3.jpg",
                            "images/technology/img_4.jpg",
                        ]
                    },
                    {
                        "category": "travel",
                        "display_category": "مسافرت",
                        "images": [
                            "images/travel/img_1.jpg",
                            "images/travel/img_2.jpg",
                            "images/travel/img_3.jpg",
                            "images/travel/img_4.jpg",
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
