<template>
<div dir="rtl" class="font-irs dark:bg-gray-800">
  <Header/>
  <Nuxt/>
</div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "default",
        components: {Header}
    }
</script>

<style >
  /*.dark-mode {*/
  /*  @apply text-white bg-gray-800;*/
  /*}*/

  /*.light-mode {*/
  /*  @apply text-black bg-green-yellow;*/
  /*}*/
</style>
