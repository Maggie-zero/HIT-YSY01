export const optionsGen = function (para: any) {
  const option = {
    tooltip: {},
    backgroundColor: '#fff',
    visualMap: {
      show: false,
      dimension: 2,
      min: -10,
      max: 10,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      }
    },
    xAxis3D: {
      type: 'value',
      min: -1 * para.scope_x,
      max: para.scope_x
    },
    yAxis3D: {
      type: 'value',
      min: -1 * para.scope_y,
      max: para.scope_y
    },
    zAxis3D: {
      type: 'value',
      min: -10,
      max: 10
    },
    grid3D: {
      viewControl: {
        projection: 'orthographic',
        autoRotate: para.rotate
      }
    },
    series: [
      {
        type: 'surface',
        wireframe: {
          // show: false
        },
        equation: {
          x: {
            step: 0.05
          },
          y: {
            step: 0.05
          },
          z: function (x, y) {
            // if (Math.abs(x) < 0.5 && Math.abs(y) < 0.1) {
            //   return '-';
            // }
            return para.alpha * Math.sin(para.p_x * x * Math.PI) * Math.sin(para.p_y * y * Math.PI);
          }
        }
      }
    ]
  }
  return option;
}
