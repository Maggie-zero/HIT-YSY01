import { surGen, curGen, spcGen } from "./chart";
// 选择参数
export const modeList = [
  {
    value: "space",
    label: "3D柱形",
  },
  {
    value: "surface",
    label: "曲面建模",
  },
  {
    value: "curve",
    label: "曲线建模",
  },
];

// 显示曲线
export const chartFunc = {
  surface: surGen,
  curve: curGen,
  space: spcGen,
}

// pane参数
export const panePara = {
  surface: [
    {
      name: "alpha",
      type: "binding",
      min: 1,
      max: 10,
      label: "曲度范围",
      default: 5,
    },
    {
      name: "p_x",
      type: "binding",
      min: 0,
      max: 1,
      label: "x系数",
      default: 0.5
    },
    {
      name: "p_y",
      type: "binding",
      min: 0,
      max: 1,
      label: "y系数",
      default: 0.5
    },
    {
      name: "scope_x",
      type: "binding",
      min: 1,
      max: 10,
      label: "x轴范围",
      default: 1
    },
    {
      name: "scope_y",
      type: "binding",
      min: 1,
      max: 10,
      label: "y轴范围",
      default: 1
    },
    {
      name: "rotate",
      type: "binding",
      label: "是否旋转",
      default: false
    },
  ],
  curve: [
    {
      name: "alpha",
      type: "binding",
      min: 1,
      max: 50,
      label: "曲线范围",
      default: 1,
    },
    {
      name: "rotate",
      type: "binding",
      label: "是否旋转",
      default: false
    },
  ],
  space: [
    {
      name: "alpha",
      type: "binding",
      min: 1,
      max: 50,
      label: "曲线范围",
      default: 1,
    },
    {
      name: "rotate",
      type: "binding",
      label: "是否旋转",
      default: false
    },
  ],
}