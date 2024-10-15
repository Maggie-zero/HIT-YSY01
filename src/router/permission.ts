import router from '@/router'
import { useUserStore, useStateStore, ZmRole } from "@/store";
import { checkLogin, ngstart, ngclose } from "@/utils";



//路由守卫设置
const whiteList = ['/login', '/', '/backdoor']
router.beforeEach((to, _from, next) => {
  ngstart();
  document.title = "MYing实验室-" + (!!to.meta && to.meta.title as string)
  //在白名单或者角色正确直接跳转
  if (whiteList.includes(to.path) || (useStateStore().role != 0 && useStateStore().role in ZmRole)) {
    next()
  } else {
    if (checkLogin()) {
      next(to.path)
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  ngclose();
})