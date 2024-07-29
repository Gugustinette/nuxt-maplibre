<template>
  <div id="app">
    <UVerticalNavigation
      :links="links"
      style="min-width: 120px"
    />
    <div id="actual-page">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Map',
  icon: 'i-heroicons-map-solid',
  to: '/map/map'
}, {
  label: 'Map Basic',
  icon: 'i-heroicons-map-solid',
  to: '/map/map-basic'
}]
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #020420;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

a {
  color: #00DC82;
}

#app {
  display: flex;
  flex-direction: row;
  height: 100svh;
  width: 100vw;
}

#actual-page {
  width: 100%;
}

#actual-page > div {
  height: 100%;
}
</style>
