<template>
  <div>
    <Home/>
    <AboutUs/>
    <Package/>
  </div>

</template>

<script>
    import Home from "../components/Home";
    import AboutUs from "../components/AboutUs";
    import Package from "../components/Package";

    export default {
        components: {Package, AboutUs, Home}
    }
</script>
