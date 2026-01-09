import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  css: string | string[] | false
}

// Components to export
export const components = [
  'MglImage',
  'MglMap',
  'MglMarker',
  'MglPopup',
  // Controls
  'MglAttributionControl',
  'MglCustomControl',
  'MglFullscreenControl',
  'MglGeolocateControl',
  'MglLogoControl',
  'MglNavigationControl',
  'MglScaleControl',
  // Sources
  'MglCanvasSource',
  'MglGeoJsonSource',
  'MglImageSource',
  'MglRasterDemSource',
  'MglRasterSource',
  'MglVectorSource',
  'MglVideoSource',
  // Layers
  'MglBackgroundLayer',
  'MglCircleLayer',
  'MglFillExtrusionLayer',
  'MglFillLayer',
  'MglHeatmapLayer',
  'MglHillshadeLayer',
  'MglLineLayer',
  'MglRasterLayer',
  'MglSymbolLayer',
]

// Composition functions to export
export const composables = [
  'useMap',
  'useControl',
  'useDisposableLayer',
  'usePositionWatcher',
  'useSource',
]

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-maplibre',
    configKey: 'maplibre',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: 'maplibre-gl/dist/maplibre-gl.css',
  },
  async setup(options, nuxt) {
    // Add MapLibre's CSS
    if (options.css) {
      nuxt.options.css.push(options.css)
    }

    // Auto-import vue-maplibre-gl components
    for (const component of components) {
      addComponent({
        name: component,
        export: component,
        filePath: '@indoorequal/vue-maplibre-gl',
        chunkName: `nuxt-maplibre/${component}`,
        mode: 'all',
      })
    }

    // Auto-import vue-maplibre-gl composables
    for (const composable of composables) {
      addImports({
        name: composable,
        as: 'useMgl' + composable.slice(3),
        from: '@indoorequal/vue-maplibre-gl',
      })
    }
  },
})
