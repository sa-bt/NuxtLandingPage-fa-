<template>
<div dir="rtl" class="font-irs">
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

<style scoped>

</style>
