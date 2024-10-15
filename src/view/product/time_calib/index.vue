<template>
  <div class="h-full w-full flex flex-col p-10 bg-[rgba(250,245,245,0.85)]">
    <div class="h-1/2 flex">
      <div
        class="h-full w-1/4 px-2 flex flex-col justify-center"
        v-for="item in time_data"
      >
        <component
          ref="standard"
          :is="Echart"
          class="h-full w-full"
        />
        <div class="text-base flex-1 mb-1 text-center">
          {{ item.title }}-{{ momentTz().tz(item.location).format("D[日]a") }}
        </div>
      </div>
    </div>
    <div class="h-1/2 flex justify-around">
      <div
        class="h-full w-1/4 px-2 flex flex-col justify-center"
        v-for="item in device_data"
      >
        <component
          ref="device"
          :is="Echart"
          class="h-full w-full"
        />
        <div class="text-base flex-1 mb-1 text-center">
          {{ item.title }}-{{ momentTz().tz(item.location).format("D[日]a") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { zhCn } from "@/utils";
import { optionsGen as option1 } from "./chart/timew";
import momentTz from "moment-timezone";
import { Echart } from "@/component";
import {
  time_ying1 as time_data,
  time_ying2 as device_data,
} from "./interface";
momentTz.updateLocale("zh-cn", zhCn as any);

const standard = ref([] as any);
const device = ref([] as any);

const clock_get = (_second: number, _minute: number, _hour: number) => {
  return {
    second: _second,
    minute: _minute + _second / 60,
    hour: (_hour % 12) + _minute / 60,
  };
};
let timer: NodeJS.Timer;

onMounted(() => {
  for (let i in time_data) {
    standard.value[i].update(option1());
  }
  for (let i in device_data) {
    device.value[i].update(option1());
  }
  // console.log(momentTz.tz.names());
  nextTick(() => {
    timer = setInterval(() => {
      for (let i in time_data) {
        const clock = clock_get(
          momentTz().tz(time_data[i].location).second(),
          momentTz().tz(time_data[i].location).minute(),
          momentTz().tz(time_data[i].location).hour()
        );
        standard.value[i].update({
          series: [
            {
              name: "hour",
              animation: clock.hour !== 0,
              data: [{ value: clock.hour }],
            },
            {
              name: "minute",
              animation: clock.minute !== 0,
              data: [{ value: clock.minute }],
            },
            {
              animation: clock.second !== 0,
              name: "second",
              data: [{ value: clock.second }],
            },
          ],
        });
      }
      for (let i in device_data) {
        const clock = clock_get(
          momentTz().tz(device_data[i].location).second(),
          momentTz().tz(device_data[i].location).minute(),
          momentTz().tz(device_data[i].location).hour()
        );
        device.value[i].update({
          series: [
            {
              name: "hour",
              animation: clock.hour !== 0,
              data: [{ value: clock.hour }],
            },
            {
              name: "minute",
              animation: clock.minute !== 0,
              data: [{ value: clock.minute }],
            },
            {
              animation: clock.second !== 0,
              name: "second",
              data: [{ value: clock.second }],
            },
          ],
        });
      }
    }, 1000);
  });
});
onBeforeUnmount(() => {
  clearInterval(timer as any);
});
</script>

<style scoped lang="scss"></style>
