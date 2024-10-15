import { createPinia, PiniaPluginContext } from "pinia";


export { useStateStore, ZmRole } from './useStateStore'
export { useUserStore } from './useUserStore'
export { useTestStore } from './useTestStore'


//pinia设置
type Options = {
  key?: string
}
//mode储存方式0不存，1local，2session
const setStorage = (key: string, value: any, mode: number) => {
  switch (mode) {
    case 0: break;
    case 1: localStorage.setItem(key, JSON.stringify(value)); break;
    case 2: sessionStorage.setItem(key, JSON.stringify(value)); break;
  }
}
const getStorage = (key: string, mode: number) => {
  switch (mode) {
    case 0: break;
    case 1: return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}; break;
    case 2: return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key) as string) : {}; break;
  }
}
const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context;
    // 根据store.$id首字母确定mode
    const mode = Number(store.$id[0]) == 1 || Number(store.$id[0]) == 2 ? Number(store.$id[0]) : 0;
    // console.log(mode)
    const data = getStorage(`${options?.key ?? 'zm'}-${store.$id}`, mode)
    // console.log(data)
    store.$subscribe(() => {
      setStorage(`${options?.key ?? 'zm'}-${store.$id}`, toRaw(store.$state), mode)
    })
    return {
      ...data
    }
  }
}
const store = createPinia()
store.use(piniaPlugin({
  key: "ZM"
}))

export default store