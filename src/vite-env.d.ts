/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "rxjs"
declare module "echarts-gl/charts"
declare module "echarts-gl/components"
declare module "canvas-datagrid"
declare module "file-saver"
declare module "vue-draggable-plus"