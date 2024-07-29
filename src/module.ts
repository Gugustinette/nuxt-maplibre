import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
}

// Components to export
export const components = [
  'MglMap',
  'MglAttributionControl',
  'MglCustomControl',
  'MglFullscreenControl',
  'MglGeolocateControl',
  'MglNavigationControl',
  'MglScaleControl',
  'MglLogoControl',
  'MglMarker',
  'MglPopup',
  'MglCanvasSource',
  'MglGeoJsonSource',
  'MglImageSource',
  'MglRasterSource',
  'MglRasterDemSource',
  'MglVectorSource',
  'MglVideoSource',
  'MglBackgroundLayer',
  'MglCircleLayer',
  'MglFillLayer',
  'MglFillExtrusionLayer',
  'MglHeatmapLayer',
  'MglHillshadeLayer',
  'MglLineLayer',
  'MglRasterLayer',
  'MglSymbolLayer'
]

// Composition functions to export
export const composables = [
  'useMap',
  'useControl',
  'useDisposableLayer',
  'useLayer',
  'usePositionWatcher',
  'useSource'
]

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-maplibre',
    configKey: 'maplibre',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    // Add MapLibre's CSS
    nuxt.options.css.push('maplibre-gl/dist/maplibre-gl.css')

    // Auto-import vue-maplibre-gl components
    for (const component of components) {
      addComponent({
        name: component,
        export: component,
        filePath: '@indoorequal/vue-maplibre-gl',
        chunkName: `nuxt-maplibre/${component}`,
        mode: 'all'
      })
    }

    // Auto-import vue-maplibre-gl composables
    for (const composable of composables) {
      addImports({
        name: composable,
        as: composable,
        from: '@indoorequal/vue-maplibre-gl'
      })
    }
  }
})
