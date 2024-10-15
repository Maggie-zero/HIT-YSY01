<template>
  <el-breadcrumb
    :separator-icon="ArrowRight"
    class="ml-4 sss"
  >
    <el-breadcrumb-item
      v-for="item in routers"
      :key="item.path"
      class="text-lg"
    >
      {{ item?.meta?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import "animate.css";
import { ArrowRight } from "@element-plus/icons-vue";
const router = useRouter();
const routers = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title);
});
</script>

<style scoped lang="scss">
::v-deep(.el-breadcrumb__inner) {
  color: gray !important;
  font-weight: 400 !important;
}
.el-breadcrumb__item:last-child ::v-deep(.el-breadcrumb__inner) {
  color: rgb(104, 103, 103) !important;
  font-weight: 600 !important;
}
</style>
