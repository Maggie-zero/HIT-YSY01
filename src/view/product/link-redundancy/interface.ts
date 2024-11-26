// export const 
export const full_para = [
  {
    name: "关键指标",
    label: "X",
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
    name: "链路选择",
    label: "Y",
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
    name: "有无信标",
    label: "Z",
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
    name: "参数1：信标光源发射功率",
    label: "测试1值",
    default: 10,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },
  {
    name: "参数2：信号光源发射功率",
    label: "测试2值",
    default: 20,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },
  {
    name: "参数3：信标发射光束束散角",
    label: "测试3值",
    default: 30,
    group: "third",
    type: "ElInput",
    unit: "urad"
  },
  {
    name: "参数4：信号发射光束束散角",
    label: "测试4值",
    default: 40,
    group: "third",
    type: "ElInput",
    unit: "urad"
  },
  {
    name: "参数5：接收天线口径",
    label: "测试5值",
    default: 50,
    group: "third",
    type: "ElInput",
    unit: "mm"
  },
  {
    name: "参数6：信标光波长",
    label: "测试6值",
    default: 60,
    group: "third",
    type: "ElInput",
    unit: "nm"
  },
  {
    name: "参数7：信号光波长",
    label: "测试7值",
    default: 70,
    group: "third",
    type: "ElInput",
    unit: "nm"
  },
  {
    name: "参数8：发射透过率",
    label: "测试8值",
    default: 0.80,
    group: "third",
    type: "ElInput"
  },
  {
    name: "参数9：接收透过率",
    label: "测试9值",
    default: 0.90,
    group: "third",
    type: "ElInput"
  },
  {
    name: "参数10：分光比（APD）",
    label: "测试10值",
    default: 100,
    group: "third",
    type: "ElInput"
  },
  {
    name: "参数11：链路距离",
    label: "测试11值",
    default: 1180,
    group: "third",
    type: "ElInput",
    unit: "km"
  },
  {
    name: "参数12：相机探测模块灵敏度",
    label: "测试12值",
    default: 120,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },
  {
    name: "参数13：APD探测模块灵敏度",
    label: "测试13值",
    default: 130,
    group: "third",
    type: "ElInput",
    unit: "dBmW"
  },



  {
    name: "发射天线增益",
    label: "结果1",
    default: '',
    group: "fourth",
    type: "ElInput",
    
  },
  {
    name: "接收天线增益",
    label: "结果2",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "发射光路损耗",
    label: "结果3",
    default: '',
    group: "fourth",
    type: "ElInput",
    
  },
  {
    name: "接收光路损耗",
    label: "结果4",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "自由空间传输损耗",
    label: "结果5",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "最大瞄准误差",
    label: "结果6",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },
  {
    name: "瞄准损耗",
    label: "结果47",
    default: '',
    group: "fourth",
    type: "ElInput",
   
  },

]