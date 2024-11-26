export const optionsGen = (data: any) => {
  const option = {
    title: {
      text: '链路冗余随参数变化图',
      left: 'center'
    },
    xAxis: {
      name: '光源发射功率',
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 18,
        fontFamily: "serif",
        lineHeight: 35,
        fontWeight: 800,
        color: "#000000"
      },
      nameGap:25,
      roam:true,
      type: 'value',
     
    },
    yAxis: {
      name: '链路冗余（dB）',
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 18,
        fontFamily: "serif",
        lineHeight: 35,
        fontWeight: 800,
        color: "#000000"
      },
      nameGap:20,
      roam:true,
      type: 'value'
    },
    visualMap: {
      type: "piecewise",
      show:false,
      pieces: [
       
        {min: 4, max: 10, color: '#FF8C00'},
        {min: 0, max: 4, color: 	"#0000FF"},
          
    ],
      calculable: true,
    },
    series: [
      {
        data: data,
        type: 'scatter',
        smooth: true,
      
      }
    ]
  };
  return option
}