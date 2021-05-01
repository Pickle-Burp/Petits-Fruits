<template>
  <section>
    <Navbar/>
    <HelloWorld/>
    <Footer/>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    HelloWorld,
    Navbar,
  },
};
</script>
