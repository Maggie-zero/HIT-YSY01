import { defineStore } from "pinia";
import { Names } from "./store-name";



export const useUserStore = defineStore(Names.Login, {
  state: () => ({
    id: "",
    user: "",
    token: "",
    exp: 0,
    plantMode: 0,
    plate_addr: '',

    menu_cir: 0,
    menu_desk: 0,

    conlist: [] as any,
    loong: {} as any,
  }),
  getters: {

  },
  actions: {

  }
})