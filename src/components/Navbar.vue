<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/pickle.png"
          alt="Pickle"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item :to="{ path: '/game' }" tag="router-link">
        Le jeu
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/project' }" tag="router-link">
        Le projet
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/downloads' }" tag="router-link">
        Téléchargements
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Essayer</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>
