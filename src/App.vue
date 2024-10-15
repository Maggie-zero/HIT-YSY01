<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  window.addEventListener("popstate", (e) => {
    // 禁用右键上下文
    e.preventDefault();
    window.history.forward();
  });
});

onBeforeUnmount(() => {
  // leave().then(() => {
  //   logout();
  // });
});
</script>

<style scoped lang="scss"></style>
