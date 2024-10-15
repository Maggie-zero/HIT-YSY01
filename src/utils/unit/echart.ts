import * as echarts from 'echarts/core';
import 'echarts-wordcloud';
import { Line3DChart, SurfaceChart, Bar3DChart, FlowGLChart, Map3DChart, Scatter3DChart } from 'echarts-gl/charts'
import { Grid3DComponent } from 'echarts-gl/components'

echarts.use([Map3DChart, Scatter3DChart, FlowGLChart, SurfaceChart, Bar3DChart, Line3DChart, Grid3DComponent])

import {
     BarChart,
     LineChart,
     PieChart,
     MapChart,
     PictorialBarChart,
     RadarChart,
     ScatterChart,
     GaugeChart,
     TreeChart,
     CustomChart,
     GraphChart
} from 'echarts/charts';

import {
     BrushComponent,
     TitleComponent,
     TooltipComponent,
     GridComponent,
     PolarComponent,
     AriaComponent,
     ParallelComponent,
     LegendComponent,
     RadarComponent,
     ToolboxComponent,
     DataZoomComponent,
     VisualMapComponent,
     TimelineComponent,
     CalendarComponent,
     GraphicComponent
} from 'echarts/components';

echarts.use([
     BrushComponent,
     LegendComponent,
     TitleComponent,
     TooltipComponent,
     GridComponent,
     PolarComponent,
     AriaComponent,
     ParallelComponent,
     BarChart,
     LineChart,
     PieChart,
     TreeChart,
     MapChart,
     RadarChart,
     PictorialBarChart,
     GaugeChart,
     GraphChart,
     RadarComponent,
     ToolboxComponent,
     DataZoomComponent,
     VisualMapComponent,
     TimelineComponent,
     CalendarComponent,
     GraphicComponent,
     ScatterChart, CustomChart
]);

export { echarts };