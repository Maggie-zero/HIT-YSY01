<template>
  <div class="w-full h-full flex">
    <div class="w-[30%] h-full flex flex-col justify-around p-1">
      <div class="w-full h-full pr-5 pb-3">
        <div class="w-full h-full border-t-0 border-2 pt--1">
          <el-divider content-position="left" class="font-bold">飞机1坐标</el-divider>
          <div class="w-full h-full flex flex-col">
            <div
              class="flex-col w-full p-1 pl-5"
              :key="item.name"
              v-for="item in full_para2.filter((items) => items.group == 'one')"
            >
              <div class="py-1 flex w-full">
                <div class="w-[50%] text-lg font-bold">{{ item.label }}:</div>
                <div class="w-[30%]">
                  <component
                    class="w-full"
                    v-model="state.para[item.name]"
                    spellcheck="false"
                    :is="item.type"
                  >
                    <el-option
                      v-for="i in item.select"
                      :key="i.value"
                      :label="i.label"
                      :value="i.value"
                    ></el-option>
                  </component>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full pr-5 pb-3">
        <div class="h-full w-full border-t-0 border-2 pt--1">
          <el-divider content-position="left">飞机2坐标</el-divider>
          <div class="h-full w-full flex flex-col">
            <div
              class="flex-col w-full p-1 pl-5"
              :key="item.name"
              v-for="item in full_para2.filter((items) => items.group == 'two')"
            >
              <div class="py-1 flex w-full overflow-hidden">
                <div class="w-[50%] text-lg font-bold">{{ item.label }}:</div>
                <div class="w-[30%]">
                  <component
                    class="w-full"
                    v-model="state.para[item.name]"
                    spellcheck="false"
                    :is="item.type"
                  >
                    <el-option
                      v-for="i in item.select"
                      :key="i.value"
                      :label="i.label"
                      :value="i.value"
                    ></el-option>
                  </component>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-full pr-5 flex flex-col justify-around">
        <div class="w-full h-1/3 pl-20 justify-center py-10">
          <el-button @click="calcu">计算</el-button>
        </div>
        <div class="w-full h-full">
          <div class="w-full h-2/3 border-t-0 border-2 pt--1">
            <el-divider content-position="left">双机距离</el-divider>

            <div class="w-full h-5/6 pl-10 flex justify-between">
              <div class="text-2xl">距离(km):</div>
              <div class="bg-stone-50 text-2xl w-2/5 h-2/3">{{ state.distance }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[45%] h-full flex flex-col">
      <div class="w-full h-full pr-10">
        <div class="w-full h-full border-t-0 border-2 pt--1">
          <el-divider content-position="left">编队飞行条件</el-divider>
          <div
            class="flex-col w-full h-[18%] p-1 overflow-auto j"
            :key="item.name"
            v-for="item in full_para2.filter((items) => items.group == 'three')"
          >
            <div class="flex w-full justify-around overflow-hidden">
              <div class="w-[50%] text-lg font-bold">{{ item.label }}:</div>
              <div class="w-[30%]">
                <component
                  class="w-full"
                  v-model="state.para[item.name]"
                  spellcheck="false"
                  :is="item.type"
                >
                  <el-option
                    v-for="i in item.select"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                  ></el-option>
                </component>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full pr-10 pt-3">
        <div class="w-full h-[90%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">激光终端条件</el-divider>
          <div
            class="flex-col w-full h-[25%] p-1 pt-5 justify-between overflow-auto"
            :key="item.name"
            v-for="item in full_para2.filter((items) => items.group == 'four')"
          >
            <div class="flex w-full justify-around overflow-hidden">
              <div class="w-[50%] text-lg font-bold">{{ item.label }}:</div>
              <div class="w-[30%]">
                <component
                  class="w-full"
                  v-model="state.para[item.name]"
                  spellcheck="false"
                  :is="item.type"
                >
                  <el-option
                    v-for="i in item.select"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                  ></el-option>
                </component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[30%] h-full flex flex-col justify-around">
      <div class="w-full h-full">
        <div class="h-full w-full border-t-0 border-2 pt--1">
          <el-divider content-position="left">计算模块</el-divider>
          <div class="h-full w-full flex pt-3">
            <div class="w-full h-full">
              <div
                class="flex flex-col w-full h-full pl-2"
                :key="item.name"
                v-for="item in full_para2.filter(
                  (items) => items.group == 'five'
                )"
              >
                <div class="py-1 flex justify-around w-full">
                  <div class="w-[30%] text-lg font-bold">{{ item.label }}:</div>
                  <div class="w-[40%]">
                    <component
                      class="w-full"
                      v-model="state.para[item.name]"
                      spellcheck="false"
                      :is="item.type"
                    >
                      <el-option
                        v-for="i in item.select"
                        :key="i.value"
                        :label="i.label"
                        :value="i.value"
                      ></el-option>
                    </component>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-[20%] h-full pt-1">
              <el-button @click="calcu2">计算</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full pt-3 pb-3">
        <div class="w-full h-full border-t-0 border-2 pt--1">
          <el-divider content-position="left">结果显示</el-divider>
          <div
            class="flex-col w-[99%] p-2"
            :key="item.name"
            v-for="item in full_para2.filter((items) => items.group == 'six')"
          >
            <div class="py-1 flex w-full justify-around overflow-hidden">
              <div class="w-[50%] text-lg font-bold">{{ item.label }}:</div>
              <div class="w-[30%]">
                <component
                  class="w-full"
                  v-model="state.para[item.name]"
                  spellcheck="false"
                  :is="item.type"
                >
                  <el-option
                    v-for="i in item.select"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                  ></el-option>
                </component>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <div class="w-full h-3/4 border-t-0 border-2 pt--1 pb-3">
          <el-divider content-position="left">边界条件判断</el-divider>
          <div class="w-full h-[90%] flex flex-col justify-between">
            <div class="flex flex-col w-full h-4/5 p-2">
              <div
                class="flex-col w-full h-[25%] p-3"
                :key="item.name"
                v-for="item in full_para2.filter(
                  (items) => items.group == 'seven'
                )"
              >
                <div class="py-1 flex justify-between w-full">
                  <div class="text-lg font-bold">{{ item.label }}:</div>
                  <div class>
                    <component
                      class="w-full"
                      v-model="state.para[item.name]"
                      spellcheck="false"
                      :is="item.type"
                    >
                      <el-option
                        v-for="i in item.select"
                        :key="i.value"
                        :label="i.label"
                        :value="i.value"
                      ></el-option>
                    </component>
                  </div>
                </div>
              </div>
              <div class="w-full h-full pt-10 pl-32 justify-center">
                <el-button @click="judge">判断</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Echart } from "@/component";
import { test1Gen, test2Gen } from "./chart";
import { full_para2 } from "./interface";

const mainChart = ref();
const state = reactive({
  para: {} as any,
  distance: 0
});

const calcu = () => {
  //pow是平方运算，sqrt是开方，floor是取整数
  state.distance =
    Math.pow(state.para["one1"] - state.para["two1"], 2) +
    Math.pow(state.para["one2"] - state.para["two2"], 2) +
    Math.pow(state.para["one3"] - state.para["two3"], 2);
  state.distance = Math.floor(Math.sqrt(state.distance) * 100) / 100;
};
const calcu2 = () => {
  // 43443;
  // mainChart.value.update(test1Gen(123));
};
const judge = () => {
  // 5788;
  // mainChart.value.update(test2Gen(121113));
};
const paraInit = (para: any) => {
  para.forEach((item: any) => {
    state.para[item.name] = item.default;
  });
};

onMounted(() => {
  paraInit(full_para2);
  console.log(state.para);
  // mainChart.value.update(test1Gen());
  nextTick(() => {});
});
onBeforeUnmount(() => {});
</script>

<style scoped lang="scss"></style>
