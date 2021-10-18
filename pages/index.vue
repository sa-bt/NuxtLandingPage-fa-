<template>
  <div>
    <Home/>
    <AboutUs/>
    <Package/>
    <Gallery/>
    <Contact/>
    <Footer/>
  </div>

</template>

<script>
    import Home from "../components/Home";
    import AboutUs from "../components/AboutUs";
    import Package from "../components/Package";
    import Gallery from "../components/Gallery";
    import Contact from "../components/Contact";
    import Footer from "../components/Footer";

    export default {
        components: {Footer, Contact, Gallery, Package, AboutUs, Home}
    }
</script>
