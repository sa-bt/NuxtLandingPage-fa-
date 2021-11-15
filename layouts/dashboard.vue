<template>
  <div class="h-screen font-irs" dir="rtl">
    <div class="flex ">
      <!--Side nav-->
      <div class="w-56 h-full flex-none">
        <div class="p-6 ">
          <img src="/icon.png" alt="" class="h-12 m-auto">
        </div>
        <div class="mx-2 mb-5">
          <button
            :class="`w-full rounded px-3 py-4 items-center justify-start font-semibold flex  ${active===page.id ? 'bg-color-secondary': ''}`"
            v-for="(page,index) in pages" :key="index" @click="active=page.id">
            <i :class="`${page.icon} ml-3`"></i>
            <p>{{page.title}}</p>
          </button>
        </div>
      </div>

      <!--Main Content-->
      <div class="w-full h-full relative bg-blue-400">
        <!--Header-->
        <div class="w-full sticky top-0 bg-yellow-500 p-2 flex items-center justify-between ">
          <div class="flex items-center ">
            <button class="rounded-"></button>
          </div>
          <div class="relative">
            <button @click="showDropdown = !showDropdown" class="focus:outline-none flex items-center rounded-full py-1 px-2 bg-light">
              <img src="/pic.jpg" class="rounded-full h-8 w-8 " alt="">
              <p class="font-semibold text-xs mx-3 text-white">سید احمد بخشیان</p>
              <i v-if="showDropdown===false" class="fa fa-sort-down text-white border border-color-secondary fa-7x"></i>
              <i v-if="showDropdown===true" class="fa fa-sort-up text-white"></i>
            </button>

            <div v-if="showDropdown===true" class="absolute bg-light p-2 w-full rounded mt-1 ">
<button @click="showDropdown = false" class="w-full py-2 text-white text-sm border-b border-white  opacity-75 hover:opacity-100 focus:outline-none">پروفایل</button>
<button @click="showDropdown = false" class="w-full py-2 text-white text-sm border-b border-light  opacity-75 hover:opacity-100 focus:outline-none">خروج</button>
            </div>
          </div>
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
                    {icon: 'fas fa-home', title: 'داشبورد', id: 'dashboard'},
                    {icon: 'fas fa-hashtag', title: 'محصولات', id: 'explore'},
                    {icon: 'fas fa-bell', title: 'اعلانات', id: 'notifications'},
                    {icon: 'fas fa-envelope', title: 'پیغام ها', id: 'messages'},
                    {icon: 'fas fa-bookmark', title: 'علاقه مندی ها', id: 'bookmarks'},
                    {icon: 'fas fa-clipboard-list', title: 'لیست خرید', id: 'lists'},
                    {icon: 'fas fa-ellipsis-h', title: 'بیشتر', id: 'more'},
                ],
                active: 'dashboard',
                showDropdown:false
            }
        }
    }
</script>

<style scoped>

  i:before {
    left: 0;
    top: -4px;
  }
</style>
