<template>
  <section>
    <Navbar/>
    <section class="section has-background-light">
      <div class="container" style="margin-top: 3em">
        <h1 class="title is-size-1">Les téléchargements</h1>
        <h2 class="subtitle">
          Retrouvez l'ensemble des téléchargements associés au projet.
        </h2>
      </div>
      <div class="container top-padding">
        <h1 class="title">Le jeu</h1>
        <div class="buttons">
          <a href="#"
             target="_blank">
            <b-button type="is-primary" icon-left="download" disabled>
              Télécharger HeyMorty!
            </b-button>
          </a>
          <a href="#" style="padding-left: 1em"
             target="_blank">
            <b-button type="is-info" icon-left="book" disabled>
              Manuel D'installation
            </b-button>
          </a>
          <a href="#" style="padding-left: 1em" target="_blank">
            <b-button type="is-info" icon-left="book" disabled>Manuel D'utilisation</b-button>
          </a>
        </div>
      </div>
      <div class="container top-padding">
        <h1 class="title">Le projet</h1>
        <div class="buttons">
          <a href="#" target="_blank">
            <b-button type="is-warning" icon-left="download" disabled>
              Le rapport de projet
            </b-button>
          </a>
          <a href="#"
             style="padding-left: 1em"
             target="_blank">
            <b-button type="is-warning" icon-left="feather" inverted disabled>
              Version allégée
            </b-button>
          </a>
          <a href="#" style="padding-left: 1em"
             target="_blank">
            <b-button type="is-success" icon-left="gavel" disabled>Licenses</b-button>
          </a>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Downloads',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.top-padding {
  padding-top: 1em;
}
</style>
