// export const 
export const full_para = [
  {
    name: "choose1",
    label: "关键指标",
    default: 0,
    group: "first",
    type: "ElSelect",
    select: [
      {
        value: 0,
        label: "光源发射功率",
      },
      {
        value: 1,
        label: "发射光束束散角",
      },
      {
        value: 2,
        label: "接收天线口径",
      },
      {
        value: 3,
        label: "光波长",
      },
      {
        value: 4,
        label: "发射透过率",
      },
      {
        value: 5,
        label: "接收透过率",
      },
      {
        value: 6,
        label: "分光比",
      },
      {
        value: 7,
        label: "链路距离",
      },
      {
        value: 8,
        label: "探测模块灵敏度",
      },
    ]
  },
  {
    name:"choose2", 
    label:"链路选择",
    default: 1,
    group: "first",
    type: "ElSelect",
    select: [
      {
        value: 0,
        label: "捕获链路",
      },
      {
        value: 1,
        label: "跟踪链路",
      },
      {
        value: 2,
        label: "通信链路",
      },
    ]
  },
  {
    name: "choose3",
    label: "有无信标",
    default: 1,
    group: "first",
    type: "ElSelect",
    select: [
      {
        value: 0,
        label: "有信标",
      },
      {
        value: 1,
        label: "无信标",
      },
    ]
  },
 
 





  {
    name: "input1",
    label: "信标光源发射功率", 
    default: 10,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },
  {
    name: "input2",
    label: "信号光源发射功率",
    default: 20,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },
  {
    name: "input3",
    label: "信标发射光束束散角",
    default: 30,
    group: "third",
    type: "ElInput",
    unit: "urad"
  },
  {
    name: "input4",
    label: "信号发射光束束散角",
    default: 40,
    group: "third",
    type: "ElInput",
    unit: "urad"
  },
  {
    name: "input5",
    label: "接收天线口径",
    default: 50,
    group: "third",
    type: "ElInput",
    unit: "mm"
  },
  {
    name: "input6",
    label: "信标光波长",
    default: 60,
    group: "third",
    type: "ElInput",
    unit: "nm"
  },
  {
    name:"input7", 
    label: "信号光波长",
    default: 70,
    group: "third",
    type: "ElInput",
    unit: "nm"
  },
  {
    name: "input8",
    label:"发射透过率",
    default: 0.80,
    group: "third",
    type: "ElInput"
  },
  {
    name: "input9",
    label: "接收透过率",
    default: 0.90,
    group: "third",
    type: "ElInput"
  },
  {
    name: "input10",
    label: "分光比(APD)",
    default: 100,
    group: "third",
    type: "ElInput"
  },
  {
    name: "input11", 
    label: "链路距离",
    default: 1180,
    group: "third",
    type: "ElInput",
    unit: "km"
  },
  {
    name: "input12",
    label: "相机探测模块灵敏度",
    default: 120,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },
  {
    name: "input13",
    label: "APD探测模块灵敏度",
    default: 130,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },



  {
    name: "display1",
    label: "发射天线增益",
    default: '',
    group: "fourth",
    type: "ElInput",
    
  },
  {
    name: "display2",
    label: "接收天线增益",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name:"display3", 
    label:"发射光路损耗",
    default: '',
    group: "fourth",
    type: "ElInput",
    
  },
  {
    name: "display4",
    label: "接收光路损耗",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "display5",
    label: "自由空间传输损耗",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "display6",
    label: "最大瞄准误差",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "display7",
    label: "瞄准损耗",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },

]