<template>
  <div>
    <div style="height: 150px; overflow: hidden;">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path class="fill-gray-200 dark:fill-gray-700"
              d="M-0.27,22.20 C149.99,150.00 349.20,-49.98 503.67,17.27 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg>
    </div>

    <section class="bg-gray-200 dark:bg-gray-700 ">
      <div class="container py-4 px-10 m-auto">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <!--Part1-->
          <div>
            <h1 class="mb-4 text-2xl font-bold ">SABT</h1>
            <p class="leading-8 mb-6 mt-3">لورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن</p>
            <div class="space-x-4 space-x-reverse">
              <a href=""><i class="fab fa-instagram text-4xl"></i></a>
              <a href=""><i class="fab fa-linkedin text-4xl"></i></a>
              <a href=""><i class="fab fa-skype text-4xl"></i></a>
              <a href=""><i class="fab fa-google text-4xl"></i></a>
              <a href=""><i class="fab fa-github text-4xl"></i></a>
            </div>
          </div>

          <!--Part2-->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 lg:mt-0">
            <div>
              <h2 class="font-bold border-b-2 leading-10">بخش های وب سایت</h2>
              <ul class="space-y-1 mt-2">
                <li>صفحه اصلی</li>
                <li>محصولات</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
              </ul>
            </div>
            <div>
              <h2 class="font-bold border-b-2 leading-10">محصولات</h2>
              <ul class="space-y-1 mt-2">
                <li>محصول1</li>
                <li>محصول2</li>
                <li>محصول3</li>
                <li>محصول4</li>
              </ul>
            </div>
            <div>
              <h2 class="font-bold border-b-2 leading-10">خدمات</h2>
              <ul class="space-y-1 mt-2">
                <li>خدمت1</li>
                <li>خدمت2</li>
                <li>خدمت3</li>
                <li>خدمت4</li>
              </ul>
            </div>
            <div>
              <h2 class="font-bold border-b-2 leading-10">تماس با ما</h2>
              <ul class="space-y-1 mt-2">
                <li>تماس با ما</li>
                <li>درباره ما</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
