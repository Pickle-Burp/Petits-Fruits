<template>
  <section class="section has-background-light">
    <div class="container center-content">
      <h1 class="is-size-1 is-centered has-text-centered">L'équipe BURP</h1>
      <br/>
      <p class="is-centered">
        Notre groupe s'appelle <a>BURP</a>, le projet <a>PICKLE</a>. Notre assistant vocal se nomme
        <a>Morty</a>.
      </p>
      <br/>
      <h1 class="title is-2">Pourquoi ces noms ?</h1> <br/>
      <p>
        Le nom de notre groupe et de notre projet ainsi que celui de notre assistant vocal sont
        tous les trois inspirés de la série <a>Rick & Morty</a>. En effet, nous partageons une
        passion commune pour cette série et c'est donc pourcela que nous avons choisi ces noms.
        De plus, dans la série, Rick est un véritable génie inventeur et Morty est son acolyte,
        celui qui l'accompagne dans toutes ses aventures, c'est pour cela que nous avons nommé notre
        assistant Morty.</p>
      <br/>
      <br/>
      <div class="columns">
        <div class="column">
          <TeamMember name="Matthieu" username="Szechuan-sauce"
                      role="Chef de projet, Segmentation"
                      avatar="https://img2.freepng.fr/20180320/hwq/kisspng-pocket-mortys-rick-sanchez-morty-smith-computer-ic-rick-avatar-blue-vers-icon-5ab1ccd860a082.9774853115216017523958.jpg"
                      desc="J'aime beaucoup le jus d'ananas. Ca donne un petit gout sucré."
          />
        </div>
        <div class="column">
          <TeamMember name="Lise" username="Unity"
                      role="Réseau de neuronnes"
                      desc="Au pire, s'il meurt, ce n'est pas si grave. En plus c'est joli le sang!"
                      avatar="https://i1.sndcdn.com/artworks-000222600719-gs9yvd-t500x500.jpg"/>
        </div>
        <div class="column">
          <TeamMember name="Valentin" username="Squanchy"
                      role="Réseau de neuronne, Site Web"
                      desc="Bark Bark, Squanchy bark."
                      avatar="https://popito.fr/wp-content/uploads/2019/02/funko_pop_television_rick_and_morty_xxx_berserker_squanchy.jpg"/>
        </div>
        <div class="column">
          <TeamMember name="Annabelle" username="Prout"
                      role="Analyse du texte, Execution"
                      desc="Son père met son iPad dans le four. Puis le fait cuire."
                      avatar="https://static.wikia.nocookie.net/rickandmorty/images/8/84/Fart.jpg"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from './TeamMember.vue';

export default {
  name: 'Team',
  components: { TeamMember },
};
</script>

<style scoped>

</style>
