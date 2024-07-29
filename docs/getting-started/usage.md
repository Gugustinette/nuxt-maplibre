---
outline: deep
---

# Usage

Nuxt Maplibre is a module that provides a set of components (from [vue-maplibre-gl](https://indoorequal.github.io/vue-maplibre-gl/)) to work with Maplibre in Nuxt 3.

Here is a basic example of how to use the `MglMap` and `MglNavigationControl` components to display a map :

::: warning
This is only possible in a client-side environment. You should either :
- Use a [Client-Only Page](https://nuxt.com/docs/guide/directory-structure/pages#client-only-pages).
- Wrap your component inside the [ClientOnly](https://nuxt.com/docs/api/components/client-only) component.
- Set your [rendering strategy](https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering) to `ssr: false` for the appropriate route.
:::

```vue
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
</script>
```

And here is how it should look :

<script setup>
import { defineClientComponent } from 'vitepress'

const MglMap = defineClientComponent(() => {
  return import('@indoorequal/vue-maplibre-gl').then(m => m.MglMap)
})
const MglNavigationControl = defineClientComponent(() => {
  return import('@indoorequal/vue-maplibre-gl').then(m => m.MglNavigationControl)
})

const style = 'https://api.maptiler.com/maps/streets/style.json?key=cQX2iET1gmOW38bedbUh';
const center = [-1.559482, 47.21322];
const zoom = 8;
</script>

<MglMap
  :map-style="style"
  :center="center"
  :zoom="zoom"
  height="500px"
>
  <MglNavigationControl />
</MglMap>

::: tip
If the map is not displayed but there's no error in the console, make sure you have set a height or width to the `MglMap` component.
:::
