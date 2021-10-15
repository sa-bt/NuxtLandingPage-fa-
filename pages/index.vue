<template>
  <div>
    <Home/>
    <AboutUs/>
  </div>

</template>

<script>
    import Home from "../components/Home";
    import AboutUs from "../components/AboutUs";

    export default {
        components: {AboutUs, Home}
    }
</script>
