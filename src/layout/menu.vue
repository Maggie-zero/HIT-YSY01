<template>
  <div class="w-full h-full rounded-lg">
    <transition leave-active-class="animate__animated animate__flipInY">
      <el-menu
        default-active="1"
        :collapse="State.menu_fold"
        class="w-full h-full font-medium overflow-hidden board"
        :class="sysMode.filter((nav) => nav.id == Suser.plantMode)[0].class"
        :unique-opened="open"
        v-show="state.exist"
        router
        active-text-color="blue"
      >
        <el-menu-item index="">
          <el-icon><component is="HomeFilled" /></el-icon>
          <span class="text-base">{{
            sysMode.filter((nav) => nav.id == Suser.plantMode)[0].tit
          }}</span>
        </el-menu-item>

        <template v-for="item in menuList()">
          <el-menu-item
            :index="item.path"
            v-if="item.meta.isSingle"
          >
            <el-icon><component :is="item.meta.icon" /></el-icon>
            <span class="text-base">{{ item.meta.title }}</span>
          </el-menu-item>
          <el-sub-menu
            :index="item.path"
            v-else
          >
            <!-- 一级菜单 -->
            <template #title>
              <el-icon><component :is="item.meta.icon" /></el-icon>
              <span class="text-base">{{ item.meta.title }}</span>
            </template>
            <!-- 子菜单 -->
            <el-menu-item
              v-for="(subItem, index) in item.children"
              :key="index"
              :index="subItem.path"
            >
              <el-icon><component :is="subItem.meta!.icon" /></el-icon>
              <span>{{ subItem.meta!.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </transition>
  </div>
</template>

<script setup lang="ts">
//读取状态
import { useStateStore, useUserStore } from "@/store";
import { sysMode } from "./interface";

const State = useStateStore();
const Suser = useUserStore();

const state = reactive({
  exist: true,
});
const currentValue = computed(() => {
  return Suser.plantMode;
});

watch(currentValue, () => {
  state.exist = false;
  setTimeout(() => {
    state.exist = true;
  }, 1000);
});

const open = ref(true);

//获取router
const menuList = () => {
  return useRouter()
    .getRoutes()
    .filter((route) => {
      if (route.meta.type == "all") {
        return route;
      }
      if (
        sysMode
          .filter((nav) => nav.id == Suser.plantMode)[0]
          .class.includes(route.meta.type as any)
      ) {
        return route;
      }
    });
};
onMounted(() => {
  nextTick(() => {});
});
</script>

<style scoped lang="scss">
.el-menu {
  border-right-width: 0;
}
.board {
  border-radius: 10px;
  // 阴影
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  // 模糊
  backdrop-filter: blur(5px);
  z-index: 1;
}
:deep(.Production) {
  background: linear-gradient(135deg, $plant_basic_light, $plant_basic_dark);
  .el-menu-item:hover {
    outline: 0 !important;
    color: rgba(0, 0, 0, 0.586) !important;
    font-size: 20px !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background: $plant_basic_dark !important;
  }
}
:deep(.Strategy) {
  background: linear-gradient(
    135deg,
    $plant_strategy_light,
    $plant_strategy_dark
  );
}
:deep(.Research) {
  background: linear-gradient(135deg, $plant_data_light, $plant_data_dark);
  .el-menu-item:hover {
    outline: 0 !important;
    color: $plant_data_dark !important;
    font-size: 20px !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background: #2de898 !important;
  }
}
</style>
