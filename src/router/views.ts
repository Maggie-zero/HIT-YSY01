import Layout from '@/layout/index.vue'

export default [
  // 单独示例
  {
    path: '/home',
    component: Layout,
    name: 'home',
    meta: {
      level: 0,
      isSideBar: false, //
      isSingle: true,
      type: "Production",
      title: '主页',
      icon: 'Iphone'
    },
    redirect: { path: '/document1' },
    children: [
      {
        path: '/document1',
        component: () => import('@/view/product/time_calib/index.vue')
      },
    ]
  },
  // 生产模式示例
  {
    path: '/link',
    component: Layout,
    name: 'link',
    meta: {
      level: 0,
      type: "Production",
      isSideBar: true,
      title: '链路冗余评估组件',
      icon: 'Iphone'
    },
    redirect: { path: '/link' },
    children: [
      {
        path: '/link',
        meta: {
          level: 1,
          title: '系统',
          icon: 'stopwatch'
        },
        component: () => import('@/view/product/link-redundancy/index.vue')
      },
    ]
  },
  {
    path: '/link2',
    component: Layout,
    name: 'link2',
    meta: {
      level: 0,
      type: "Production",
      isSideBar: true,
      title: '链路场景评估组件',
      icon: 'Iphone'
    },
    redirect: { path: '/link2' },
    children: [
      {
        path: '/link2',
        meta: {
          level: 1,
          title: '系统',
          icon: 'stopwatch'
        },
        component: () => import('@/view/product/link-scene/index.vue')
      },
    ]
  },

  // {
  //   path: '/pro1',
  //   component: Layout,
  //   name: 'pro1',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '部件评测建模系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro11' },
  //   children: [
  //     {
  //       path: '/pro11',
  //       meta: {
  //         level: 1,
  //         title: '系统',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro1/index.vue')
  //     },
  //   ]
  // },
  // {
  //   path: '/pro2',
  //   component: Layout,
  //   name: 'pro2',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '远场等效测试系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro21' },
  //   children: [
  //     {
  //       path: '/pro21',
  //       meta: {
  //         level: 1,
  //         title: '系统',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro2/index.vue')
  //     },
  //   ]
  // },
  // {
  //   path: '/pro3',
  //   component: Layout,
  //   name: 'pro3',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '轨道设计仿真系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro31' },
  //   children: [
  //     {
  //       path: '/pro31',
  //       meta: {
  //         level: 1,
  //         title: '系统1',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro3/index.vue')
  //     },
  //   ]
  // },
  // {
  //   path: '/pro4',
  //   component: Layout,
  //   name: 'pro4',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '组网路由规划系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro11' },
  //   children: [
  //     {
  //       path: '/pro11',
  //       meta: {
  //         level: 1,
  //         title: '系统',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro4/index.vue')
  //     },
  //   ]
  // },
  // {
  //   path: '/pro5',
  //   component: Layout,
  //   name: 'pro5',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '空间环境模拟系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro51' },
  //   children: [
  //     {
  //       path: '/pro51',
  //       meta: {
  //         level: 1,
  //         title: '系统',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro1/index.vue')
  //     },
  //   ]
  // },
  // {
  //   path: '/pro6',
  //   component: Layout,
  //   name: 'pro6',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '在轨运维控制系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro61' },
  //   children: [
  //     {
  //       path: '/pro61',
  //       meta: {
  //         level: 1,
  //         title: '系统',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro6/index.vue')
  //     },
  //   ]
  // },
  // {
  //   path: '/pro7',
  //   component: Layout,
  //   name: 'pro7',
  //   meta: {
  //     level: 0,
  //     type: "Production",
  //     isSideBar: true,
  //     title: '中央监控调度系统',
  //     icon: 'Iphone'
  //   },
  //   redirect: { path: '/pro71' },
  //   children: [
  //     {
  //       path: '/pro71',
  //       meta: {
  //         level: 1,
  //         title: '系统',
  //         icon: 'stopwatch'
  //       },
  //       component: () => import('@/view/product/pro7/index.vue')
  //     },
  //   ]
  // },

  // 科研模式示例
  {
    path: '/geo',
    component: Layout,
    name: 'hologram',
    meta: {
      level: 0,
      type: "Research",
      isSideBar: true,
      title: '地图系统',
      icon: 'Iphone'
    },
    redirect: { path: '/hologram' },
    children: [
      {
        path: '/hologram',
        meta: {
          level: 1,
          title: '地理演示',
          icon: 'stopwatch'
        },
        component: () => import('@/view/research/hologram/index.vue')
      },

      {
        path: '/hologram1',
        meta: {
          level: 1,
          title: '卫星运转',
          icon: 'Aim'
        },
        component: () => import('@/view/research/satellite/index.vue')
      },
      {
        path: '/hologram2',
        meta: {
          level: 1,
          title: '卫星轨道运转',
          icon: 'Aim'
        },
        component: () => import('@/view/research/satellite2/index.vue')
      },

      {
        path: '/hologram3',
        meta: {
          level: 1,
          title: '卫星多轨道运行',
          icon: 'Aim'
        },
        component: () => import('@/view/research/satellite3/index.vue')
      },
    ]
  },
  // 战略模式示例
  {
    path: '/stre',
    component: Layout,
    name: 'stre',
    meta: {
      level: 0,
      type: "Strategy",
      isSideBar: true,
      title: '行为',
      icon: 'Iphone'
    },
    redirect: { path: '/stre1' },
    children: [
      {
        path: '/stre1',
        meta: {
          level: 1,
          title: '演示',
          icon: 'stopwatch'
        },
        component: () => import('@/view/strategy/op_record/index.vue')
      },

    ]
  },
]

export const my_route = []

