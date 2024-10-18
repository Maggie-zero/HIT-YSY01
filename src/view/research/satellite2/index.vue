<template>
  <div class="relative h-full w-full">
    <!-- <div class="absolute top-0 left-0 w-1/6 h-1/6 z-10 bg-white opacity-50 border-2 shadow-lg"></div> -->
    <div id="cesiumContainer" class="absolute top-0 left-0 w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import {
  Cartesian3,
  createOsmBuildingsAsync,
  Ion,
  Math as CesiumMath,
  Terrain,
  Viewer
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import test_data from "@/view/research/satellite2/test.json";
import * as Cesium from "cesium";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYzIzM2MwNy05OTAzLTQ4NjUtYmFjZC0wOWVjYThjODM5ZDIiLCJpZCI6MTgyNjEyLCJpYXQiOjE3MDE3NzU4OTR9.dRcHqDW6fURu70xEFTdvwBvAN4JU5-RFSrPHzYwt9IA";
const state = reactive({
  viewer: {} as any
});

onMounted(async () => {
  state.viewer = new Viewer("cesiumContainer", {
    terrain: Terrain.fromWorldTerrain(),
    //搜索框
    geocoder: false,
    //home键
    homeButton: false,
    // 动画控件
    animation: false,
    //全屏按钮
    fullscreenButton: false,
    //场景模式选择器
    sceneModePicker: false,
    //时间轴
    timeline: false,
    //导航提示
    navigationHelpButton: false,
    //添加动画,火苗加载
    shouldAnimate: true,
    //地图选择器

    baseLayerPicker: true,

    vrButton: false, //VR模式
    infoBox: false, //信息框
    selectionIndicator: false, //选取指示器组件
    navigationInstructionsInitiallyVisible: false, //导航说明
    mapProjection: new Cesium.WebMercatorProjection()
  });

  state.viewer.scene.globe.depthTestAgainstTerrain = true; //开始深度测试
  state.viewer.cesiumWidget.creditContainer.style.display = "none"; //cesium标识去掉

  //创建DataSource
  const datasource = new Cesium.CustomDataSource("enetiestestdata");
  state.viewer.dataSources.add(datasource);
  const data = [] as any;
  test_data.forEach((i: { [x: string]: number }) => {
    data.push([i["x (km)"] * 1000, i["y (km)"] * 1000, i["z (km)"] * 1000]);
  });
  // const lujingdata = [
  //   [126.4603186710001, 45.84388249900003, 500001.147400000001653],
  //   [116.45946237800001, 45.843739847000063, 500001.108399999997346],
  //   [106.45859906800001, 35.843571198000075, 500000.89079999999376],
  //   [96.45789337300005, 20.843422075000046, 500001.12170000000333],
  //   [86.4571119630001, 20.843350937000037, 500001.545700000002398],
  //   [76.45620292500007, 0.843325030000028, 500001.529899999994086],
  //   [66.45545284400009, 10.843363754000063, 500001.038100000005215],
  //   [56.45473256600008, 25.843448056000068, 500000.86380000000645],
  //   [46.45399052200003, 35.84362332100064, 500001.345600000000559],
  //   [36.45347615200001, 40.84381135600007, 500001.687300000005052],
  //   [26.45292459000007, 51.844031608000034, 500002.106100000004517],
  //   [16.45192097000006, 37.844426226000064, 500002.842399999994086],
  //   [6.45065835500009, 20.844954275000032, 500002.712299999999232],
  //   [-6.44851592000009, 10.844125416000065, 500004.410999999992782],
  //   [-16.44848024700002, 20.84392828000007, 500004.475800000000163],
  //   [-26.44948683700011, 0.84350793500006, 500004.507400000002235],
  //   [-36.45089297600009, 0.842959855000072, 500004.290399999998044],
  //   [-46.45149371900004, 0.842693826000027, 500004.127099999997881],
  //   [-56.45166848000008, 0.842571364000048, 500005.52610000000277],
  //   [-66.4516358520001, 0.842433625000024, 500004.0341000000044],
  //   [-76.45082070700005, 0.840899211000033, 500003.289099999994505],
  //   [-86.45082070700005, 0.840899211000033, 500003.289099999994505],
  //   [-96.44897692800009, 0.844980649000047, 500004.909599999999045],
  //   [-106.44872415000009, 0.84449598400006, 500004.55899999999383],
  //   [-116.44851592000009, 0.844125416000065, 500004.410999999992782],
  //   [-126.44848024700002, 0.84392828000007, 500004.475800000000163],
  //   [-136.44948683700011, 0.84350793500006, 500004.507400000002235],
  //   [-146.45089297600009, 0.842959855000072, 500004.290399999998044],
  //   [-156.44980033200011, 0.845266268000057, 500002.504899999999907],
  //   [-166.44948683700011, 0.84350793500006, 500004.507400000002235],
  //   [-176.45089297600009, 0.842959855000072, 500004.290399999998044],
  //   [166.44943370300007, 0.845413392000023, 500002.731599999999162],
  //   [156.44920128900003, 10.845382554000037, 500002.967699999993783],
  //   [146.44897692800009, 20.844980649000047, 500004.909599999999045],
  //   [136.44872415000009, 30.84449598400006, 500004.55899999999383],
  //   [126.4603186710001, 45.84388249900003, 500001.147400000001653]
  // ];
  let data_arr: any[] = [];
  data.forEach((j: any) => {
    data_arr.push(Cesium.Cartesian3.fromArray(j));
  });
  //添加线
  datasource.entities.add({
    id: "polygontest",
    name: "line",
    polyline: {
      positions: data_arr,
      material: Cesium.Color.RED,
      width: 2
    }
  });
  // console.log(data_arr);
  const property = new Cesium.SampledPositionProperty();
  const starttime = new Date();
  let stoptime: string | number | Date;
  const timestamp = starttime.getTime();
  // console.log(timestamp);

  data.forEach((z: any, index: number) => {
    var time = new Date(timestamp + index * 500);
    stoptime = time;
    var position = Cesium.Cartesian3.fromArray(z);
    // var position = Cesium.Cartesian3.fromDegrees(pos[0], pos[1], pos[2]);
    property.addSample(Cesium.JulianDate.fromDate(time), position);
  });

  // console.log(property);
  property.setInterpolationOptions({
    interpolationDegree: 0.0001,
    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
  });

  const entitydd: any = datasource.entities.add({
    availability: new Cesium.TimeIntervalCollection([
      new Cesium.TimeInterval({
        start: Cesium.JulianDate.fromDate(starttime),
        stop: Cesium.JulianDate.fromDate(new Date(stoptime))
      })
    ]),
    position: property, // 点集
    // 朝向
    orientation: new Cesium.VelocityOrientationProperty(property),
    //位置标签
    label: {
      text: "",
      fillColor: Cesium.Color.RED,
      pixelOffset: new Cesium.Cartesian2(0, -30)
    },
    //模型
    model: {
      uri: "src/assets/image/Mars Reconnaissance Orbiter.glb", //卫星
      scale: 2, //设置模型的比例
      minimumPixelSize: 1700,
      maximumScale: 17000
    },

    path: {
      leadTime: 0,
      resolution: 1,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.1,
        color: Cesium.Color.GREEN
      }),
      width: 20
    }
  });

  state.viewer.clock.onTick.addEventListener((tick: { currentTime: any }) => {
    entitydd.position.getValue(tick.currentTime);

    // console.log(entitydd.position.getValue(tick.currentTime));
    //转为经纬度
    var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(
      entitydd.position.getValue(tick.currentTime)
    );
    cartographic.longitude = Cesium.Math.toDegrees(cartographic.longitude);
    cartographic.latitude = Cesium.Math.toDegrees(cartographic.latitude);
    // console.log(cartographic);
    entitydd.label.text =
      Number(cartographic.longitude).toFixed(4) +
      "," +
      Number(cartographic.latitude).toFixed(4);
  });

  state.viewer.trackedEntity = entitydd;

  state.viewer.clock.currentTime = Cesium.JulianDate.fromDate(starttime); //修改时间轴的当前时间
  state.viewer.clock.stopTime = Cesium.JulianDate.fromDate(new Date(stoptime));
  state.viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
  state.viewer.clock.shouldAnimate = true; //开始播放
  // state.viewer.zoomTo(datasource);
});

onBeforeUnmount(() => {});
</script>

<style scoped lang="scss"></style>

