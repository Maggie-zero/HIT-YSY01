<template>
  <div class="h-full w-full p-2 flex">
    <div class="h-[99%] w-[30%] flex flex-col justify-between p-1">
      <div class="w-[99%] h-[35%] pr-20">
        <div class="h-[94%] w-[98%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">飞机1坐标</el-divider>
          <div class="h-[90%] w-full flex flex-col">
            <div
              class="flex-col w-[99%] p-4"
              :key="item.name"
              v-for="item in full_para2.filter((items) => items.group == 'one')"
            >
              <div class="py-1 flex w-full overflow-hidden">
                <div class="w-[50%] text-xl">{{ item.label }}:</div>
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
      <div class="w-[99%] h-[35%] pr-20">
        <div class="h-[94%] w-[98%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">飞机2坐标</el-divider>
          <div class="h-[90%] w-full flex flex-col">
            <div
              class="flex-col w-[99%] p-4"
              :key="item.name"
              v-for="item in full_para2.filter((items) => items.group == 'two')"
            >
              <div class="py-1 flex w-full overflow-hidden">
                <div class="w-[50%] text-xl">{{ item.label }}:</div>
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
      <div class="w-[99%] h-[10%] pt-10 pl-32 justify-center">
        <el-button @click="calcu">计算</el-button>
      </div>
      <div class="w-[98%] h-[15%] pr-20">
        <div class="h-[84%] w-[99%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">双机距离</el-divider>

          <div class="w-[90%] h-[40%] pl-20 pt-3 flex justify-between">
            <div class="text-2xl">距离（km）:</div>
            <div class="bg-stone-50 text-2xl pl-2 w-1/3">{{ state.distance }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[99%] w-[40%] flex flex-col p-1 justify-between">
      <div class="w-[99%] h-[60%] pr-20">
        <div class="w-[99%] h-[98%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">编队飞行条件</el-divider>
          <div
            class="flex-col w-[99%] h-[18%] p-1 overflow-auto j"
            :key="item.name"
            v-for="item in full_para2.filter((items) => items.group == 'three')"
          >
            <div class="flex w-full justify-around overflow-hidden">
              <div class="w-[50%] text-xl">{{ item.label }}:</div>
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
      <div class="w-[99%] h-[35%] pr-20">
        <div class="w-[99%] h-[93%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">激光终端条件</el-divider>
          <div
            class="flex-col w-[99%] h-[28%] p-1 justify-between overflow-auto"
            :key="item.name"
            v-for="item in full_para2.filter((items) => items.group == 'four')"
          >
            <div class="flex w-full justify-around overflow-hidden">
              <div class="w-[50%] text-xl">{{ item.label }}:</div>
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
    <div class="h-[99%] w-[30%] flex flex-col justify-between p-1">
      <div class="w-[99%] h-[30%]">
        <div class="h-[94%] w-[98%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">计算模块</el-divider>
          <div class="h-[90%] w-full flex pt-10">
            <div class="w-[70%] h-[80%] pt-10">
              <div
                class="flex flex-col w-[95%] h-[90%] pl-2"
                :key="item.name"
                v-for="item in full_para2.filter((items) => items.group == 'five')"
              >
                <div class="py-1 flex justify-around w-full">
                  <div class="w-[30%] text-xl">{{ item.label }}:</div>
                  <div class="w-[50%]">
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
            <div class="flex flex-col w-[25%] h-[80%] pt-11 p-2">
              <el-button @click="calcu2">计算</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[99%] h-[26%]">
        <div class="w-[98%] h-[98%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">结果显示</el-divider>
          <div
            class="flex-col w-[99%] p-4"
            :key="item.name"
            v-for="item in full_para2.filter((items) => items.group == 'six')"
          >
            <div class="py-1 flex w-full justify-around overflow-hidden">
              <div class="w-[50%] text-xl">{{ item.label }}:</div>
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
      <div class="w-[99%] h-[40%]">
        <div class="h-[94%] w-[98%] border-t-0 border-2 pt--1">
          <el-divider content-position="left">边界条件判断</el-divider>
          <div class="h-[95%] w-full flex flex-col pl-5">
            <div class="flex flex-col w-[95%] h-[70%] p-2">
              <div
                class="flex-col w-[99%] p-4"
                :key="item.name"
                v-for="item in full_para2.filter((items) => items.group == 'seven')"
              >
                <div class="py-1 flex justify-between w-full">
                  <div class="w-[50%] text-xl">{{ item.label }}:</div>
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
            <div class="flex flex-col w-[50%] h-[20%] pt-5 pl-32 justify-center">
              <el-button @click="judge">判断</el-button>
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
