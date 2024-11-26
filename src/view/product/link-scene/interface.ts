// export const 
export const full_para2 = [
  {
    name: "one1",
    label: "坐标X(km)",
    default: '10',
    group: "one",
    type: "ElInput",
    
  },
  {
    name: "one2",
    label: "坐标Y(km)",
    default: '20',
    group: "one",
    type: "ElInput",
   
  },
  {
    name: "one3",
    label: "坐标Z(km)",
    default: '30',
    group: "one",
    type: "ElInput",
   
  },
  {
    name: "two1",
    label: "坐标X(km)",
    default: '100',
    group: "two",
    type: "ElInput",
    
  },
  {
    name: "two2",
    label: "坐标Y(km)",
    default: '200',
    group: "two",
    type: "ElInput",
   
  },
  {
    name: "two3",
    label: "坐标Z(km)",
    default: '300',
    group: "two",
    type: "ElInput",
   
  },


  {
    name: "three",
    label: "位置测量精度(m)",
    default: 105,
    group: "three",
    type: "ElInput",
    
  },
  {
    name: "three2",
    label: "位置预测精度(m)",
    default: 32223,
    group: "three",
    type: "ElInput",
  
  },
  
  {
    name: "three3",
    label:"姿态测量精度(°)",
    default: 0.42,
    group: "three",
    type: "ElInput",
    
  },
  {
    name: "three4",
    label:  "定向精度(指北)(°)",
    default: 0.54,
    group: "three",
    type: "ElInput",
  
  },
  
  {
    name: "three5",
    label: "链路距离(km)",
    default: 3225,
    group: "three",
    type: "ElInput",
    
  },
  {
    name: "four1",
    label: "姿态角补偿后精度(mrad)",
    default: 20,
    group: "four",
    type: "ElInput",
  
  },
  {
    name: "four2",
    label: "扫描单场时间(s)",
    default: 0.3,
    group: "four",
    type: "ElInput",
  
  },

  {
    name: "four3",
    label: "束散角(mrad)",
    default: 1,
    group: "four",
    type: "ElInput",
  
  },
  {
    name: "five",
    label:"计算方法",
    default: 0,
    group: "five",
    type: "ElSelect",
    select: [
      {
        value: 0,
        label: "峰峰值",
      },
      {
        value: 1,
        label: "3sigma",
      },
     
    
    ]
  },
  {
    name: "six1", 
    label: "不确定区域(mrad)",
    default: "",
    group: "six",
    type: "ElInput",
  
  },
  
  {
    name:"six2",
    label: "捕获时间(s)",
    default: "",
    group: "six",
    type: "ElInput",
    
  },
  {
    name: "seven1",
    label: "日凌角度(°)",
    default: 2033,
    group: "seven",
    type: "ElInput",
    
  },
  {
    name: "seven2", 
    label: "月凌角度(°)",
    default: 3023,
    group: "seven",
    type: "ElInput",
  
  },
  
  {
    name: "seven3", 
    label: "角加速度(°/s)",
    default: 0.02,
    group: "seven",
    type: "ElInput",
    
  },
 


]