<template>
  <div class="overflow-hidden h-full w-full flex p-1">
    <div
      v-for="nav in navs"
      class="til active"
      :id="String(nav.id)"
    >
      <div class="shadow"></div>
      <div class="content">
        <div class="text">{{ nav.tit }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from "lodash-es";
const props = withDefaults(
  defineProps<{
    navs: Array<any>;
    modelValue: Number;
  }>(),
  {}
);
const currentValue = computed(() => {
  return props.modelValue;
});

watch(currentValue, () => {
  items.forEach((i: any) => {
    i.classList.remove("active");
  });
  items[currentValue.value as any].classList.add("active");
});

const emit = defineEmits<{
  (e: "nav_name", name: any): void;
}>();

let items: any;
onMounted(() => {
  items = document.querySelectorAll(".til");
  nextTick(() => {
    items.forEach((i: any) => {
      i.classList.remove("active");
    });
    items[props.modelValue as any].classList.add("active");
    items.forEach((item: any) => {
      item.addEventListener(
        "click",
        debounce(
          () => {
            emit("nav_name", item.id);
          },
          1000,
          {
            leading: true,
          }
        )
      );
    });
  });
});
onBeforeUnmount(() => {
  items.forEach((item: any) => {
    item.removeEventListener("click", () => {
      items.forEach((i: any) => {
        i.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
});
</script>

<style scoped lang="scss">
.til {
  position: relative;
  width: 60px;
  height: 100%;
  // margin: 5px;
  padding: 2px;
  cursor: pointer;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  overflow: hidden;
  border: 1px solid rgba(208, 217, 238, 0.5);
}
.til.active {
  flex: 1;
  margin: 0;
  border-radius: 15px;
}
.til .content {
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 5px;
  right: 0;
  height: 40px;
  justify-content: center;
  align-items: center;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.til.active .content {
  bottom: 5px;
  left: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  // flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
.til .content .icon {
  min-width: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.til.active .content .icon {
  color: black;
}
.til .content .text {
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #000;
  width: 100%;
}
.til.active .content .text {
  color: #fff;
  font-size: 20px;
}
.til .shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(224, 228, 237, 0.5) 65%,
    transparent
  );
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.til.active .shadow {
  background: linear-gradient(to top, #acb0b7 25%, transparent);
}

.til .detail {
  display: none;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.til.active .detail {
  position: absolute;
  display: flex;
  left: 10px;
  right: 10px;
  top: 20px;
  margin: auto;
  color: #000;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
</style>
