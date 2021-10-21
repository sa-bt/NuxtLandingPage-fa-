<template>
<div dir="rtl" class="font-irs">
  <Navbar/>
  <Nuxt/>
</div>
</template>

<script>
    import Navbar from "../components/Navbar";
    export default {
        name: "default",
        components: {Navbar}
    }
</script>

<style >
  /*.dark-mode {*/
  /*   @apply text-white bg-gray-800;*/
  /* }*/

  /*.light-mode {*/
  /*  @apply text-black bg-green-yellow;*/
  /*}*/
</style>
