import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'maplibre-gl/dist/maplibre-gl.css'

export default {
  extends: DefaultTheme
} satisfies Theme
