---
outline: deep
---

# Configuration

`nuxt-maplibre` is designed to work with zero configuration.

For further control, options are exposed under the `maplibre` property in `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-maplibre"],
  maplibre: {
    // Options
  },
});
```

## Module options

The following options can be used to customize the module's behavior.

### `css`

- Type: `string | string[] | false`
- Default: `'maplibre-gl/dist/maplibre-gl.css'`

Defines the styles that should be set globally by `nuxt-maplibre`.

These entries are added to the `css` array within `nuxt.config` and included on every page. See the [`nuxt.config` documentation](https://nuxt.com/docs/4.x/api/nuxt-config#css) for more information.

Set to `false` to prevent `nuxt-maplibre` from including any CSS files. This can be useful if MapLibre's style sheet is not needed on every page of your application.
