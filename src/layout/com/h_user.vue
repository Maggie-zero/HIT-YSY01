<template>
  <el-dropdown class="mr-4">
    <span class="el-dropdown-link flex flex-row justify-center items-center">
      <div class="w-8 h-8 rounded-1 bg-transparent">
        <el-avatar
          :size="30"
          shape="square"
          :src="pic(useUserStore().id)"
        ></el-avatar>
      </div>

      <el-icon class="el-icon--right flex items-end">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item disabled
          >用户：{{ useUserStore().user }}</el-dropdown-item
        >
        <el-dropdown-item @click="user_info">用户信息</el-dropdown-item>
        <el-dropdown-item
          @click="centerDialogVisible = true"
          divided
          >退出</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dialog
    v-model="centerDialogVisible"
    title="确认"
    width="30%"
    align-center
  >
    <span>确认退出</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="quit"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/useUserStore";
import { fileRomote } from "@/utils";
import router from "@/router";

const centerDialogVisible = ref(false);

const pic = (id: string) => {
  return fileRomote(`/avatar/${id}.gif!200!200`);
};

const user_info = () => {
  router.push({
    name: "user",
  });
};
function quit() {
  console.log("asdffsds");
  router.push({
    name: "login",
  });
}
</script>
<style scoped>
/* .example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
} */
</style>
