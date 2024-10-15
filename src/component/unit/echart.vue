<template>
  <div
    ref="chartDom"
    class="w-full h-full"
  />
</template>

<script setup lang="ts">
import { useChart, ThemeType, RenderType } from "@/utils";
import { EChartsOption } from "echarts";
const props = withDefaults(
  defineProps<{
    option?: EChartsOption;
    type?: any;
    render?: any;
  }>(),
  {
    type: ThemeType.Default,
    render: RenderType.SVGRenderer,
  }
);

const chartDom = ref();
const chart = useChart(chartDom, props.type, props.render);

function update(option: object) {
  // if (chart == null) {
  //   return;
  // } else {
  //   chart.setOption(option);
  // }
  try {
    chart.setOption(option);
  } catch (err) {
    console.log(err);
  }
}

defineExpose({
  update,
});

onMounted(() => {
  nextTick(() => {
    chart.showLoading();
    // chart.setOption(props.option);
  });
});
</script>

<style scoped lang="scss"></style>
