import {defineStore} from "pinia";
import {Names} from "./store-name"


export const useTestStore = defineStore(Names.Test, {
  state:()=> ({
    current :1,
    name:"jinyu"
  }),
  getters:{
    new():string{
      return this.name
    }
  },
  actions:{
    changeCurrent(num:number){
      this.current += num
    }

  }
})