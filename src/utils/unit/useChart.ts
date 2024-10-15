import { nextTick, onMounted, onUnmounted, Ref, unref } from "vue";
import { echarts } from "@/utils/unit/echart";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";

export enum RenderType {
    SVGRenderer = 'SVGRenderer',
    CanvasRenderer = 'CanvasRenderer'
}
export enum ThemeType {
    Light = 'light',
    Dark = 'dark',
    Default = 'default'
}

export function useChart(elRef: Ref<HTMLDivElement>,
    theme: ThemeType = ThemeType.Default,
    render: RenderType = RenderType.SVGRenderer,
    autoChartSize = true,
    animation: boolean = true,
) {
    // 渲染模式
    echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer)
    // echart实例
    let chartInstance: echarts.ECharts | null = null;

    // 初始化echart
    const initCharts = () => {
        const el = unref(elRef)
        if (!el || !unref(el)) {
            return
        }
        //切换echarts语言
        chartInstance = echarts.init(el, theme, { locale: "ZH" });
    }

    // 更新/设置配置
    const setOption = (option: any) => {
        nextTick(() => {
            if (!chartInstance) {
                initCharts();
                if (!chartInstance) return;
            }

            chartInstance.setOption(option)
            hideLoading()
        })

    }

    // 获取echart实例
    function getInstance(): echarts.ECharts | null {
        if (!chartInstance) {
            initCharts();
        }
        return chartInstance;
    }

    // 更新大小
    function resize() {
        try {
            // console.log(chartInstance)
            chartInstance?.resize();
        } catch (err) {
            console.log(err);
        }
    }

    // 监听元素大小
    function watchEl() {
        // 给元素添加过渡
        if (animation) { elRef.value.style.transition = 'width 1s, height 1s' }
        const resizeObserver = new ResizeObserver((entries => resize()))
        resizeObserver.observe(elRef.value);
    }

    // 显示加载状
    function showLoading() {
        if (!chartInstance) {
            initCharts();
        }
        chartInstance?.showLoading()
    }
    // 显示加载状
    function hideLoading() {
        if (!chartInstance) {
            initCharts();
        }
        chartInstance?.hideLoading()
    }

    onMounted(() => {
        // window.addEventListener('resize', resize)
        if (autoChartSize) watchEl();
    })

    onUnmounted(() => {
        // window.removeEventListener('resize', resize)
    })

    return {
        setOption,
        getInstance,
        showLoading,
        hideLoading
    }
}