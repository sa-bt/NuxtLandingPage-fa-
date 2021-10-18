<template>
  <section>
    <div class="container  mx-auto py-4 px-10 lg:px-20 lg:w-4/5">
      <div class="flex flex-col md:flex-row items-center gap-x-24">
        <div class="mt-8 lg:mt-0 ">
          <h1 class="text-2xl font-bold mb-5">لورم ایپسوم </h1>
          <p class=" text-justify leading-8 mb-6 ">لورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن ساختگیلورم ایسوم متن ساختگی لورم ایسوم متن ساختگی
            لورم
            ایسوم متن ساختگی لورم ایسوم متن ساختگی لورم ایسوم متن ساختگی لورم ایسوم متن ساختگی است</p>
          <form action="">
            <div>
              <label for="email" class="form-label">ایمیل:</label>
              <input
                type="email"
                id="email"
                class="form-input"
                placeholder="ایمیل..."
              >
            </div>
            <div class="mt-5">
              <label for="body" class="form-label">متن شما:</label>
              <textarea
                id="body"
                name="body"
                rows="4"
                class="form-input dark:fill-gray-700"
                placeholder="متن شما..."
              ></textarea>
            </div>
            <button class="btn btn-primary mt-3">ارسال پیام</button>
          </form>
        </div>
        <img class="md:w-1/4" src="icon.png" alt="">

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
