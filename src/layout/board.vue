<template>
  <div class="relative">
    <Screenc class="absolute right-4 bottom-4"></Screenc>

    <router-view
      v-slot="{ Component }"
      :key="$route.fullPath"
    >
      <transition class="animate__animated animate__lightSpeedInRight">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import { Screenc } from "./com";
</script>

<style scoped lang="scss"></style>
