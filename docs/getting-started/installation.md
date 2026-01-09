---
outline: deep
---

# Installation

## Basic (Recommended)

```bash
npx nuxi@latest module add nuxt-maplibre
```

## Manual

- Add `nuxt-maplibre` dependency to your project

```bash
npm install nuxt-maplibre
```

- Add `nuxt-maplibre` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-maplibre'
  ]
})
```
