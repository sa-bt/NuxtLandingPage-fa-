<template>
  <div>
    <Home/>
    <AboutUs/>
    <Package/>
    <Gallery/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>

</template>

<script>
    import Home from "../components/Home";
    import AboutUs from "../components/AboutUs";
    import Package from "../components/Package";
    import Gallery from "../components/Gallery";

    export default {
        components: {Gallery, Package, AboutUs, Home}
    }
</script>
