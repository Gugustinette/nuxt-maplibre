<template>
  <MglMap
    :map-style="style"
    :center="center"
    :zoom="zoom"
  >
    <MglNavigationControl />
  </MglMap>
</template>

<script setup>
const style = 'https://api.maptiler.com/maps/streets/style.json?key=cQX2iET1gmOW38bedbUh';
const center = [-1.559482, 47.21322];
const zoom = 8;

const map = useMglMap();
console.log(map.isLoaded)
console.log(map.isMounted)
console.log(map.instance)
console.log(map.map)
</script>
