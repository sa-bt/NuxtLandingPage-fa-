<template>
  <section>
    <div class="container mx-auto py-4 px-10 lg:px-20">
      <div class="flex flex-col md:flex-row items-center gap-x-24">
        <div class="mt-8 lg:mt-0 " data-aos="fade-up" data-aos-delay="1500">
          <h1 class="text-2xl font-bold mb-5" >لورم ایپسوم </h1>
          <p class=" text-justify leading-8 mb-6 "  >لورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن ساختگی لورم ایسوم متن ساختگی
            لورم
            ایسوم متن ساختگی لورم ایسوم متن ساختگی لورم ایسوم متن ساختگی لورم ایسوم متن ساختگی است</p>
          <NuxtLink :to="{name:'auth-login'}" class="btn btn-primary">ورود</NuxtLink>
          <NuxtLink :to="{name:'auth-register'}" class="btn btn-secondary">عضویت</NuxtLink>
        </div>
        <img class="md:w-1/4" data-aos="flip-up" data-aos-duration="1000" src="icon.png" alt="">
      </div>
    </div>
  </section>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
