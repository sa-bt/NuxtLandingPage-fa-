<template>
  <div class="h-screen flex justify-center items-center">
    <div class="relative w-full">
      <div class="primary rounded-md p-5 m-7 ">
        <h2 class="text-2xl ">خوش آمدید</h2>
        <p class="">ورود به سایت</p>
        <p class="text-xs mt-32">طراحی شده توسط sabt</p>
      </div>

      <div class="absolute left-12 rounded-md p-2 w-full flex flex-col justify-center items-center shadow-xl">
          <div class="identity-input mb-4">
            <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              ایمیل</label
            >
            <input
              id="identity"
              class="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="your-account@site.domain"
              aria-describedby="emailHelp"
              v-model="form.email"
            />
            <span class="text-xs text-red-700" id="emailHelp" v-if="errors.email">{{errors.email[0]}}</span>
          </div>

          <div class=" mb-6">
            <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
            >رمز عبور</label
            >

            <input
              aria-describedby="passwordHelp"
              v-model="form.password"

              class="shadow appearance-none border-rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
            />

            <span class="text-xs text-red-700" id="passwordHelp" v-if="errors.password">{{errors.password[0]}}</span>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ورود
            </button>
            <NuxtLink
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              :to="{name:'auth-forgotPassword'}"
            >
              روز عبورتان را فراموش کرده اید؟
            </NuxtLink>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login1",
        data() {
            return {
                form: {
                    email: "",
                    password: "",
                },
                errors:[]
            };
        },
    }
</script>

<style scoped>

</style>
