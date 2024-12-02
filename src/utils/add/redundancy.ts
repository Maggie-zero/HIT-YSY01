class Redundancy {
  // 该类实例
  // private static Redundancy: Redundancy | undefined



  // 模型文件
  private origin_data: any;



  public constructor() {

  }


  /**
   *  扫描全图,计算颜色比例
   */
  public calcuRatio() {
  }

  /**
   *  更改某种颜色
   */
  private changeColor() {
    // return [rgba[0], rgba[1], rgba[2], rgba[3]]
  }


  /**
   *  计算单点灰度值
   */
  private gray = (rgba) => {
    return rgba[0] * 77 + rgba[1] * 151 + rgba[2] * 28;
  };
}


export { Redundancy };