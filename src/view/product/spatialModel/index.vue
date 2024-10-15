<template>
  <div class="h-full w-full p-4 flex overflow-hidden">
    <div class="h-full w-5/6 shadow-lg border">
      <transition enter-active-class="animate__animated animate__zoomIn">
        <component
          v-if="state.isExist"
          ref="chart"
          :is="Echart"
          class="h-full w-full"
        />
      </transition>
    </div>

    <div class="h-full w-1/6 ml-4 flex flex-col">
      <div class="border-b-2 w-full h-[5%] text-lg text-center pt-2">
        分析设置
      </div>
      <div class="w-full h-[5%] bg-blue-50">
        <el-select
          v-model="state.mode"
          class="mt-2"
          placeholder="选择模式"
          @change="chooseMode"
        >
          <el-option
            v-for="item in modeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="w-full h-[95%] bg-red-50 overflow-auto">
        <div
          id="pane"
          class="w-full shadow-lg mt-2"
        ></div>
        <input
          class="p-1 mt-4"
          type="file"
          @change="fileChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pane } from "tweakpane";
import { Echart } from "@/component";
import { modeList, panePara, chartFunc } from "./interface";

const chart = ref();

const state = reactive({
  mode: "surface",

  pane: {} as any,

  isExist: true,
  fileObj: {} as any,

  para: {} as any,
});
watch(state.para, () => {
  chart.value.update(chartFunc[state.mode](state.para));
});

//选择数据源得到数据项
const fileChange = (e: any) => {
  state.fileObj = e.target.files[0];
  const accept_format = ["image/png", "image/jpeg", "image/gif", "image/jpg"];
  if (state.fileObj.size > 5 * 1024 * 1024) {
    alert(state.fileObj.size + "文件不能大于5M");
    state.fileObj = null;
    return;
  }
  if (!accept_format.includes(state.fileObj.type)) {
    alert("要求标准图片格式");
    state.fileObj = null;
    return;
  }
  const image = new Image();
  image.src = window.URL.createObjectURL(state.fileObj);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
    console.log(image.width, image.height);
  };
};
//切换操作
const chooseMode = () => {
  state.isExist = false;
  state.pane.dispose();
  paneInit(panePara[state.mode]);
  nextTick(() => {
    state.isExist = true;
    nextTick(() => {
      chart.value.update(chartFunc[state.mode](state.para));
    });
  });
};
const paneInit = (para: any) => {
  para.forEach((item: any) => {
    state.para[item.name] = item.default;
  });
  state.pane = new Pane({
    container: document.getElementById("pane") as any,
    title: "参数设置",
    expanded: true,
  });

  para
    .filter((item: any) => item.type == "binding")
    .forEach((item: any) => {
      state.pane.addBinding(state.para, item.name, {
        min: item.min,
        max: item.max,
        label: item.label,
      });
    });

  const btn = state.pane.addButton({
    title: "确认",
    label: "回到初始", // optional
  });
  btn.on("click", () => {
    para.forEach((item: any) => {
      state.para[item.name] = item.default;
    });
    state.pane.refresh();
  });
};

onMounted(() => {
  paneInit(panePara[state.mode]);
  nextTick(() => {
    chart.value.update(chartFunc[state.mode](state.para));
  });
});

onBeforeUnmount(() => {});
</script>

<style scoped lang="scss">
:deep(#pane) {
  .tp-lblv_l {
    padding: 0px;
  }
  .tp-lblv_v {
    width: 70%;
    // display: none;
  }
}
</style>
