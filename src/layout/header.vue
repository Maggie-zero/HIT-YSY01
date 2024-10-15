<template>
  <div
    class="flex flex-row justify-between w-full"
    :class="mode[Suser.plantMode]"
  >
    <div class="flex flex-row items-center h-full w-2/3">
      <Clip class="h-full cursor-pointer hover:bg-gray-100"></Clip>
      <Bread class="h-full flex w-1/3"></Bread>
      <component
        :is="Acc"
        :navs="sysMode"
        v-model="Suser.plantMode"
        @nav_name="choose"
        class="h-full w-[600px] flex-1 ml-20"
      />
    </div>
    <div class="h-full flex items-center">
      <User></User>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clip, Bread, User, Acc } from "./com";
import { sysMode } from "./interface";
import { useUserStore } from "@/store";
import { useMagicKeys, whenever } from "@vueuse/core";

// 快捷键切换系统
const { cmd_e } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.metaKey && e.key === "e") e.preventDefault();
  },
});
whenever(cmd_e, () => {
  Suser.plantMode = Suser.plantMode < 2 ? Suser.plantMode + 1 : 0;
});
const mode = ["Production", "Strategy", "Research"];

const choose = (item: any) => {
  Suser.plantMode = item;
};

const Suser = useUserStore();
onMounted(() => {
  nextTick(() => {});
});
</script>

<style scoped lang="scss">
.Production {
  background: linear-gradient(135deg, $plant_basic_light, $plant_basic_dark);
}
.Research {
  background: linear-gradient(
    135deg,
    $plant_strategy_light,
    $plant_strategy_dark
  );
}
.Strategy {
  background: linear-gradient(135deg, $plant_data_light, $plant_data_dark);
}
</style>
