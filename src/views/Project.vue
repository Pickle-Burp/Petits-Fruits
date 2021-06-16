<template>
  <section>
    <Navbar/>
    <h1 class="is-size-1 is-centered has-text-centered">L'historique du projet</h1>
    <br/>
    <p class="is-centered">
      Nous sommes un groupe de quatre étudiants en seconde année à Epita Lyon. Ainsi, nous devions,
      au cours de
      notre 4ème semestre d'études réaliser un projet afin de faire un logiciel avec une forte part
      d'algorithmie.
      Après moult discussions, nous avons donc décidé de faire un assistant vocal en C, sur Linux.
      A partir de cela, il nous a donc fallu constituer le cahier des charges que vous pouvez
      trouver dans
      <a href="Downloads.vue">la page des téléchargements.</a><br/>
      Une fois le cahier des charges approuvé et validé, nous nous sommes lancés dans la réalisation
      de notre
      projet. Les tâches étaient assignées, il n'y avait plus qu'à faire ! Mais tout n'étant pas
      aussi simple,
      nous nous sommes très vite rendu compte que nous n'avions pas forcément les connaissances
      nécessaires
      pour faire ce que nous voulions. Ainsi, nous sommes arrivés à la première soutenance après
      très peu de code
      mais beaucoup de recherches : l'enregistrement de l'audio en était encore au stade de
      recherches, tout
      comme l'exécution des commandes et le réseau de neurones. Cependant, un réseau de neurones
      d'entrainement
      avait été constitué, il était capable d'apprendre n'importe quelle porte logique
      (XOR, OR, NOR, ...).
      En parallèle, une API non officielle de Google a été mise en place afin de permettre à
      l'assistant vocal
      de fonctionner malgré l'absence de réseau de neurones. Mais cette API étant assez ancienne et
      ne prenant que
      des formats audio très précis, elle n'est pas très pratique à utiliser.
      Un peu de retard avait donc été pris, de plus nous n'étions pas forcément motivés devant
      l'immensité de notre
      travail à faire. <br/><br/>
      Cependant, nous nous sommes remis au travail pour la deuxième soutenance en continuant à
      implémenter ce que
      nous avions à faire. Malheureusement nous avons tous rencontrés des problèmes techniques plus
      ou moins
      gênants : un membre n'avait plus d'ordinateur pendant plusieurs semaines, un autre n'avait
      plus
      d'environnement Linux et a eu beucoup de soucis pour en remettre un en place et un troisème
      a cassé son ordinateur en faisant des essais. Toutefois, notre projet était maintenant capable
      de lancer une
      application et
      de faire une recherche sur internet. Du côté de l'enregistrement audio, il était quasiment
      fini mais pas
      encore totalement fonctionnel. Enfin, le réseau de neurones étant plus complexe que prévu à
      construire
      en était encore au stade de recherche. UNe deuxème API, celle de Mozilla a été ajoutée afin de
      pouvoir
      comparer les résultats entre les deux API et utiliser le résultat avec le plus haut degré de
      certitude.
      De plus, une base de donnée a été trouvée afin d'entraîner correctement le réseau de neurones
      : la base
      de données du projet "Common Voice" de Mozilla. Mais malgré tous nos efforts, nous avions
      encore du retard
      et cela a impacté notre moral. <br/><br/>
      Nous voilà donc enfin à la troisième et dernière soutenance. Normalement, le logiciel doit
      être entièrement
      fonctionnel puisque c'est la fin du projet. Heureusement pour nous, et en dépit de tout notre
      retard, nous
      avons enfin un assistant vocal fonctionnel. Celui-ci fonctionne de façon très limitée : il
      faut parler avec
      une voix claire et dans un environnement silencieux afin que l'instruction soit clairement
      audible et
      compréhensible. De plus, Morty ne peut effectuer qu'un nombre très restreint de tâches :
      ouverture d'une
      application, rechercher sur internet, trouver un dossier ou un fichier (et donc l'ouvrir).
      Un correcteur
      orthographique de base a aussi été incorporé afin que le texte renvoyé soit écrit dans un
      français
      à minima correct. Bien que ce porjet soit fini, nous sommes heureux d'en voir le bout puisque
      nous avons
      grandement manqué de motivation au cours de celui-ci. En effet, nous nous sommes très vite
      aperçu que réaliser
      un assistant vocal est déjà une tâche complexe mais le C n'est clairement pas un langage fait
      pour réaliser
      ce genre de chose. Un langage orienté objet comme Python aurait été bien plus approprié.

    </p>
    <br/>
    <h1 class="title is-2">Librairies utilisées</h1> <br/>
    <p>
      Au cours de la conception de notre assistant vocal nous avons utilisé plusieurs librairies
      afin de
      nous simplifier le plus possible la tâche.
      Voici donc une liste des librairies utilisées :
    </p>
    <ul>
      <li><a href="https://man7.org/linux/man-pages/man3/err.3.html">err.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/ctype.h.0p.html">ctype.h</a></li>
      <li><a href="https://developer.gnome.org/gtk3/stable/">gtk/gtk.h</a></li>
      <li><a href="https://developer.gnome.org/glib/">glib/gi18n.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/math.h.0p.html">math.h</a></li>
      <li><a href="http://www.portaudio.com/docs/v19-doxydocs/">portaudio.h</a></li>
      <li><a href="http://www.fftw.org/">fftw3.h</a></li>
      <li><a href="http://www.libpng.org/">png.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/stdlib.h.0p.html">stdlib.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/ctype.h.0p.html">zlib.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/pthread.h.0p.html">pthread.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man3/stdio.3.html">stdio.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/string.h.0p.html">string.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/stdint.h.0p.html">stdint.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/stdbool.h.0p.html">stbool.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man0/time.h.0p.html">time.h</a></li>
      <li><a href="https://man7.org/linux/man-pages/man3/stdio.3.html">stdio.h</a></li>
    </ul>
    <Footer/>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Project',
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
