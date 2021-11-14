<template>
  <div class="h-screen font-irs" dir="rtl">
    <div class="flex ">
      <!--Side nav-->
      <div class="w-56 h-full flex-none">
        <div class="">
          <img src="/icon.png" alt="" class="h-12 ">
        </div>
        <div class="mx-2 mb-5">
          <button :class="`w-full rounded px-3 py-2 items-center justify-start font-semibold flex text-sm ${active===page.id ? 'bg-color-secondary': ''}`" v-for="(page,index) in pages" :key="index"  @click="active=page.id">
            <i :class="`${page.icon} ml-3`"></i>
            <p>{{page.title}}</p>
          </button>
        </div>
      </div>

      <!--Main Content-->
      <div class="w-full h-full relative bg-blue-400">
        <!--Header-->
        <div class="w-full sticky top-0 bg-yellow-500 ">
          Header
        </div>
        content

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dashboard",
        data() {
            return {
                pages: [
                    {id: "dashboard", title: "داشبورد", icon: "fas fa-search"},
                    {id: "products", title: "محصولات", icon: "fas fa-search"},
                    {id: "profile", title: "پروفایل", icon: "fas fa-search"},
                    {id: "exit", title: "خروج", icon: "fas fa-search"}
                ],
                active:'dashboard'
            }
        }
    }
</script>

<style scoped>

</style>
