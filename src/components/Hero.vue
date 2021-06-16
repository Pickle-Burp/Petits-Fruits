<template>
  <section class="hero is-primary is-medium">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          🥒 Pickle-Burp 🥒
        </p>
        <p class="subtitle">
          Hey Mor..buuurrrpp...ty! Look! I'm a pickle!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
