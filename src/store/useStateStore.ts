import { defineStore } from "pinia";
import { Names } from "./store-name"

export enum ZmRole {
  stranger = 0,
  guest = 1,
  ordinary = 2,
  premium = 3,
  master = 99,
}
//页面状态
export const useStateStore = defineStore(Names.State, {
  state: () => ({
    role: ZmRole.stranger,
    level: 0,
    group: 0,
    ip: '',
    login_time: '',
    city: '',
    local: '',

    dyn_route: [] as Array<string>,
    menu_fold: false, //是否展开
    main_fill: true,
  }),
  getters: {

  },
  actions: {
  }
})