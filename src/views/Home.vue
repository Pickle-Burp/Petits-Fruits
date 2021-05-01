<template>
  <section>
    <Navbar/>
    <Hero/>
    <Team/>
    <Footer/>
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Team from '../components/Team.vue';

export default {
  name: 'Home',
  components: {
    Team,
    Footer,
    Hero,
    Navbar,
  },
};
</script>
