<template>
  <div class="h-full w-full p-1 overflow-hidden ">
    <div
      tabindex="0"
      class="h-full w-full overflow-hidden z-0  bg-gray-50"
      :class="['drag', { 'drag-active': active }]"
      ref="upload"
    >
      <el-icon
        size="40"
        color="#2260FF"
        class="mb-2"
      >
        <!-- <UploadFilled /> -->
        <Reading />
      </el-icon>
      <p class="drag-subtile ">
        <div class="text-base text-black">本地文件</div>
        点击/粘贴/拖拽选择文件
        <br />
        最大支持100M
      </p>
      <input
        ref="fileIpt"
        class="filePaste-ipt"
      />
      <input
        class="file-ipt"
        type="file"
        :accept="props.accept"
        multiple
        @change="changeFile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const upload = ref();
const fileIpt = ref();
const active = ref(false);

const emit = defineEmits<{
  (e: "file_upload", file: any): void;
}>();

const props = withDefaults(
  defineProps<{
    accept?: string;
  }>(),
  {
    accept: "",
  }
);

const handleFile = (fileList: any) => {
  let files = Array.from(fileList) as any[];
  let renameReportFile = <any>[];
  for (let i in files) {
    renameReportFile.push(
      new File([files[i]] as any, files[i].name, {
        type: files[0].type,
      })
    );
  }
  emit("file_upload", renameReportFile);
};

const handleMouseover = () => {
  fileIpt.value.focus();
  // 粘贴
  fileIpt.value.addEventListener("paste", handlePaste);
};
const handleMouseout = () => {
  fileIpt.value.blur();
  fileIpt.value.removeEventListener("paste", handlePaste);
};
const handleDragleave = (e) => {
  active.value = false;
  e.preventDefault();
};
const handleDragenter = (e) => {
  active.value = true;
  e.preventDefault();
};
const handleDrop = (e) => {
  e.preventDefault();
  active.value = false;
  handleFile(e.dataTransfer.files);
};
const changeFile = (e) => {
  e.preventDefault();
  handleFile(e.target.files);
  e.target.value = ''
};
const handlePaste = (e) => {
  console.log(e);
  e.preventDefault();
  handleFile(e.clipboardData.files);
};

onMounted(() => {
  // 拖拽
  upload.value.addEventListener("drop", handleDrop);
  upload.value.addEventListener("dragleave", handleDragleave);
  upload.value.addEventListener("dragenter", handleDragenter);
  upload.value.addEventListener("dragover", handleDragenter);
  upload.value.addEventListener("mouseover", handleMouseover);
  upload.value.addEventListener("mouseout", handleMouseout);
  nextTick(() => {});
});
onBeforeUnmount(() => {
  upload.value.removeEventListener("drop", handleDrop);
  upload.value.removeEventListener("dragleave", handleDragleave);
  upload.value.removeEventListener("dragenter", handleDragenter);
  upload.value.removeEventListener("dragover", handleDragenter);
  upload.value.removeEventListener("mouseover", handleMouseover);
  upload.value.removeEventListener("mouseout", handleMouseout);
});
</script>

<style scoped lang="scss">
@mixin borderColor($color: #2260ff) {
  border: 2px dashed $color;
}

.drag {
  position: relative;
  @include borderColor(#dedede);
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:active {
    @include borderColor;
  }

  &:hover {
    @include borderColor;
  }

  &-title {
    font-size: 14px;
  }

  &-subtile {
    width: 450px;
    font-size: 12px;
    color: #999999;
    margin-top: 0;
    text-align: center;
  }
}

.file-ipt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.filePaste-ipt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
