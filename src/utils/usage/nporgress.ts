import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useClipboard from "vue-clipboard3";
import { ElNotification } from "element-plus";

//全局进度条的配置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: 'body', //指定进度条的父容器
})

// 打开进度条
export const ngstart = () => {
  NProgress.start()
}

// 关闭进度条
export const ngclose = () => {
  NProgress.done()
}

//复制
export const copyToClipboard = (val: string) => {
  const { toClipboard } = useClipboard();
  toClipboard(val).then(() => {
    ElNotification.success({
      title: "Success",
      message: "已复制到剪贴板",
      offset: 200,
      duration: 1000,
    });
  });
};