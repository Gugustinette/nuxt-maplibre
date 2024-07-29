<template>
  <MglMap
    :center="center"
    :zoom="zoom"
  >
    <MglNavigationControl />
  </MglMap>
</template>

<script setup>
const center = [-1.559482, 47.21322];
const zoom = 5;
</script>
