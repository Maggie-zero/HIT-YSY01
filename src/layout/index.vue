<template>
  <div
    class="flex h-full overflow-hidden p-1"
    ref="hol"
  >
    <transition
      leave-active-class="animate__animated animate__rollOut"
      enter-active-class="animate__animated animate__backInLeft"
    >
      <div
        class="min-w-min pr-1 relative"
        :class="{ 'w-[15%]': !State.menu_fold }"
        v-show="State.main_fill"
      >
        <Menu></Menu>
        <div
          class="absolute bottom-8 left-8 flex justify-center items-center z-10"
          @click="confirm"
        >
          <div class="toggle">
            <el-icon><Star /></el-icon>
          </div>
        </div>
      </div>
    </transition>

    <div class="flex-1 flex flex-col overflow-auto">
      <transition
        leave-active-class="animate__animated animate__rollOut"
        enter-active-class="animate__animated animate__backInDown"
      >
        <Header
          v-show="State.main_fill"
          class="h-[5%] min-h-min w-full flex items-center bg-white justify-between shadow-md z-10"
        ></Header>
      </transition>
      <Board class="h-full overflow-auto"></Board>
    </div>

    <!-- 确认界面 -->
    <el-dialog
      v-model="confirm_panel"
      title="主控"
      width="400"
    >
      <span>是否返回主控界面</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="confirm_panel = false">取消</el-button>
          <el-button
            type="primary"
            @click="callBack"
          >
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import Menu from "./menu.vue";
import Header from "./header.vue";
import Board from "./board.vue";
import { useStateStore, useUserStore } from "@/store";
import { useMagicKeys, whenever } from "@vueuse/core";
import router from "@/router";

const hol = ref();
const State = useStateStore();
const confirm_panel = ref(false);
const { cmd_s } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.metaKey && e.key === "s") e.preventDefault();
  },
});
whenever(cmd_s, () => console.log("cmd+S have been pressed"));

// 禁止拖动
const handleDrop = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};

const confirm = () => {
  confirm_panel.value = true;
};

const callBack = () => {
  confirm_panel.value = false;
};

onMounted(() => {
  // 拖拽
  hol.value.addEventListener("drop", handleDrop);
  hol.value.addEventListener("dragleave", handleDrop);
  hol.value.addEventListener("dragenter", handleDrop);
  hol.value.addEventListener("dragover", handleDrop);
  hol.value.addEventListener("contextmenu", handleDrop);
});
onBeforeUnmount(() => {
  hol.value.removeEventListener("drop", handleDrop);
  hol.value.removeEventListener("dragleave", handleDrop);
  hol.value.removeEventListener("dragenter", handleDrop);
  hol.value.removeEventListener("dragover", handleDrop);
  hol.value.removeEventListener("contextmenu", handleDrop);
});
// let timer = setInterval(() => {
//   request({
//     url: "/p0/connect",
//     method: "GET",
//   }).then((res: any) => {});
// }, 600000);
// onBeforeUnmount(() => {
//   clearInterval(timer);
// });
</script>

<style scoped lang="scss">
.toggle {
  position: absolute;
  border-radius: 50%;
  color: #435a74;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(315deg, #f0f0f0, #cacaca);
  box-shadow: -5px -5px 16px #bebebe, 5px 5px 16px #ffffff;
}
</style>
