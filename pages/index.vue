<template>
  <div>
    <Home/>
    <AboutUs/>
    <Package/>
    <Gallery/>
    <Contact/>
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
    import Contact from "../components/Contact";

    export default {
        components: {Contact, Gallery, Package, AboutUs, Home}
    }
</script>
