<template>
  <div
    class="w-120 h-10 z-10 cursor-pointer px-5 flex justify-center"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <transition
      leave-active-class="animate__animated animate__fadeOutDown"
      enter-active-class="animate__animated animate__fadeInUp"
    >
      <el-radio-group
        v-model="radio"
        size="large"
        class="shadow-2xl"
        v-show="visible"
      >
        <el-radio-button label="1">简&emsp;介</el-radio-button>
        <el-radio-button label="2">组&emsp;态</el-radio-button>
        <el-radio-button label="3">实&emsp;践</el-radio-button>
        <el-radio-button label="4">案&emsp;例</el-radio-button>
      </el-radio-group>
    </transition>
  </div>
</template>

<script setup lang="ts">
const radio = ref("1");
const visible = ref(false);

defineExpose({
  radio_c: radio,
});
</script>

<style scoped lang="scss"></style>
