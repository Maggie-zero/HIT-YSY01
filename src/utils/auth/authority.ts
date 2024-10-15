import jwt from 'jsonwebtoken'
import { myingPost } from '../comm/myingQuest.ts'
import { useStateStore, useUserStore, ZmRole } from "@/store";
import router from '@/router'
import { RouteRecordRaw } from "vue-router";
import { my_route } from "@/router/views"
import moment from "moment";

export interface Logintype {
  username: string,
  password: string
}
//登录过程
export async function login(params: Logintype): Promise<boolean> {
  let _formData = new FormData();
  _formData.append("username", params.username);
  _formData.append("password", params.password);
  const res: any = await myingPost('/auth/token', _formData);

  if (res.token) {
    const claim: any = jwt.decode(res.token, { complete: false });
    // 判断是否成功登陆，判据1claim中包含了结构信息
    if (claim.role in ZmRole) {
      useStateStore().role = claim.role;
      useStateStore().group = claim.group;
      useStateStore().level = claim.level;
      useStateStore().ip = claim.ip;
      useStateStore().city = claim.city;
      useStateStore().local = claim.local;
      useStateStore().login_time = moment().format('X');
      useUserStore().id = claim.id;
      useUserStore().user = claim.username;
      useUserStore().token = res.token;
      addDynRoute(useStateStore().role);
      // useUserStore().loong = new YingLong(useUserStore().token)
      router.push({
        name: "home",
      });
      return true;
    } else {
      console.log("wrong token");
      return false;
    }
  } else {
    console.log("no token");
    return false;
  }
}


//刷新处理
export const checkLogin = function (): boolean {
  removeDynRoute()
  if (useUserStore().token) {
    const claim: any = jwt.decode(useUserStore()!.token, { complete: false });
    // 判断是否成功登陆，判据1claim中包含了结构信息
    if (claim.role && claim.role != 0) {
      useStateStore().role = claim.role;
      useStateStore().level = claim.level;
      useStateStore().group = claim.group;
      useStateStore().ip = claim.ip;
      useStateStore().login_time = moment().format('X');
      // useUserStore().loong = new YingLong(useUserStore().token)
      addDynRoute(useStateStore().level);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
//动态路由
function addDynRoute(_level: any) {
  const _route = my_route.filter((i: any) => i.meta.level <= _level)
  _route.forEach((i: any) => {
    i.children = i.children.filter((i: any) => i.meta.level <= _level)
    router.addRoute(i as RouteRecordRaw)
    useStateStore().dyn_route.push(i.name)
  })
}

function removeDynRoute() {
  for (let i = 0; i < toRaw(useStateStore().dyn_route).length; i++) {
    router.removeRoute(toRaw(useStateStore().dyn_route)[i])
  }
}
