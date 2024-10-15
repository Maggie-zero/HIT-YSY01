<template>
  <div class="relative h-full w-full">
    <div
      id="cesiumContainer"
      class="absolute top-0 left-0 w-full h-full"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  Cartesian3,
  createOsmBuildingsAsync,
  Ion,
  Math as CesiumMath,
  Terrain,
  Viewer,
} from "cesium";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYzIzM2MwNy05OTAzLTQ4NjUtYmFjZC0wOWVjYThjODM5ZDIiLCJpZCI6MTgyNjEyLCJpYXQiOjE3MDE3NzU4OTR9.dRcHqDW6fURu70xEFTdvwBvAN4JU5-RFSrPHzYwt9IA";
const state = reactive({
  viewer: {} as any,
  entity: {} as any,

  paneEl: {} as any,
  pane: {} as any,
  para: {
    latitude: 145.0,
    projection: "",
  },
});

const s = new Cesium.Cartesian3(2, 3, 4);
console.log(s);

const myAction = async () => {
  const left = state.viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromUrl(
      await Cesium.IonResource.fromAssetId(69380)
    )
    // await Cesium.createGooglePhotorealistic3DTileset()
  );
  left.splitDirection = Cesium.SplitDirection.LEFT;
  const right = state.viewer.scene.primitives.add(
    await Cesium.createOsmBuildingsAsync()
  );
  right.splitDirection = Cesium.SplitDirection.RIGHT;

  // state.viewer.zoomTo(left);
  const slider: any = document.getElementById("slider");
  state.viewer.scene.splitPosition =
    slider.offsetLeft / slider.parentElement.offsetWidth;

  const handler = new Cesium.ScreenSpaceEventHandler(slider);

  let moveActive = false;

  function move(movement) {
    if (!moveActive) {
      return;
    }
    const relativeOffset = movement.endPosition.x;
    const splitPosition =
      (slider.offsetLeft + relativeOffset) / slider.parentElement.offsetWidth;
    slider.style.left = `${100.0 * splitPosition}%`;
    state.viewer.scene.splitPosition = splitPosition;
  }
  handler.setInputAction(function () {
    moveActive = true;
  }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
  handler.setInputAction(function () {
    moveActive = true;
  }, Cesium.ScreenSpaceEventType.PINCH_START);

  handler.setInputAction(move, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  handler.setInputAction(move, Cesium.ScreenSpaceEventType.PINCH_MOVE);

  handler.setInputAction(function () {
    moveActive = false;
  }, Cesium.ScreenSpaceEventType.LEFT_UP);
  handler.setInputAction(function () {
    moveActive = false;
  }, Cesium.ScreenSpaceEventType.PINCH_END);
};

// cesium底图初始化
const cesiInit = async () => {
  const initPara = {
    animation: false, //左下动画组件
    baseLayerPicker: false, //底图组件，选择三维数字地球的底图
    fullscreenButton: false, // 全屏组件
    vrButton: false, //VR模式
    geocoder: false, //地理编码搜索组件
    homeButton: false, //回到默认视角
    infoBox: false, //信息框
    sceneModePicker: true, //2d,3d,2.5d
    timeline: false, //时间轴组件
    navigationHelpButton: false, //帮助提示组件
    selectionIndicator: false, //选取指示器组件
    navigationInstructionsInitiallyVisible: false, //导航说明
    mapProjection: new Cesium.WebMercatorProjection(),
  };
  const arcGisImagery = Cesium.ArcGisMapServerImageryProvider.fromUrl(
    "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
  );
  state.viewer = new Viewer("cesiumContainer", {
    terrain: Terrain.fromWorldTerrain(),
    ...initPara,
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(arcGisImagery, {}),
    contextOptions: {
      webgl: {
        alpha: true,
      },
    },
  });

  state.viewer.scene.skyBox.show = false;
  state.viewer.scene.backgroundColor = new Cesium.Color(0, 0, 0, 0);

  state.viewer.cesiumWidget.creditContainer.style.display = "none";
};

onMounted(async () => {
  cesiInit();
  // await myAction();
  state.viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(126.62801, 45.73676, 17000000),
  });
});
onBeforeUnmount(() => {
  Object.keys(state).forEach((el) => delete state[el]);
});
</script>

<style scoped lang="scss">
:deep(#pane) {
  .tp-lblv_l {
    padding: 0px;
  }
  .tp-lblv_v {
    width: 70%;
    // display: none;
  }
}
#slider {
  width: 5px;
  height: 100%;
  position: absolute;
  left: 50%;
  background-color: #3370ff;
  z-index: 10;
}
</style>
