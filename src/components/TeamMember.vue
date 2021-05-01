<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="avatar" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{name}}</p>
          <p class="subtitle is-6">@{{username}}</p>
        </div>
      </div>
      <div class="content">
        {{role}}
      </div>
      <div class="content">
      {{desc}}
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: ['name', 'username', 'role', 'desc', 'avatar'],
};
</script>

<style scoped>

</style>
