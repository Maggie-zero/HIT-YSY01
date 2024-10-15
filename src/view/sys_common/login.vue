<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <!--Login Left Banner-->
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <video src="@/assets/video/video.mp4" autoplay loop muted class="w-full h-full object-cover"></video>
    </div>
    <!--end Login Left Banner-->
    <!--Login Righr Content Section-->
    <div
      class="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-between"
      style="
        background: linear-gradient(
          135deg,
          rgba(208, 217, 238, 0.1),
          rgba(130, 132, 136, 0.5)
        );
      "
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-5xl font-bold leading-tight mt-2">AI+框架技术实验室</h1>

        <el-form class="mt-6" ref="form" :rules="rules" :model="formInline">
          <el-form-item prop="username">
            <label class="block text-xl text-gray-700">账 号</label>
            <el-dropdown placement="bottom-start" trigger="click" class="w-full">
              <input
                v-model="formInline.username"
                placeholder="请输入账号"
                class="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3 h-16"
                autocomplete="true"
                autofocus
                required
              />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    class="down-menu"
                    v-for="item in users"
                    @click="autouser(item)"
                  >{{ item }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-form-item>
          <el-form-item prop="password">
            <label class="text-xl block text-gray-700">密 码</label>
            <input
              v-model="formInline.password"
              type="password"
              placeholder="请输入密码"
              class="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"
              required
            />
          </el-form-item>

          <div class="text-right mt-2">
            <a
              href="#"
              class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none"
            >忘记密码</a>
          </div>

          <button
            type="button"
            @click="onLogin"
            class="w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white shadow-lg"
          >登 陆</button>

          <hr class="my-6 border-gray-300 w-full" />

          <button
            type="button"
            @click="dd"
            class="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border"
          >
            <div class="flex items-center justify-center">
              <svg
                class="w-6 h-6 fill-current"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span class="ml-4">Log in with Permission</span>
            </div>
          </button>

          <p class="mt-8">
            Need an account?
            <a
              href="#"
              class="text-blue-500 hover:text-blue-700 font-semibold"
            >Create an account</a>
          </p>

          <p class="text-sm text-gray-500 mt-12">&copy;范成磊团队人员 2024 MYing实验室</p>
        </el-form>
      </div>
    </div>
    <!--end Login Righr Content Section-->
  </section>

  <el-dialog v-model="centerDialogVisible" title="错误" width="30%" align-center>
    <span>账户密码错误</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { Logintype, login } from "@/utils/index";
import type { FormItemRule, FormInstance } from "element-plus";

let centerDialogVisible = ref(false);

//获取DOM
const form = ref<FormInstance>();

type Rules = {
  [K in keyof Logintype]?: Array<FormItemRule>;
};
//初始化变量
const formInline = reactive<Logintype>({
  username: "",
  password: "",
});
const users = reactive(["VIC0001", "VIC0003"]);
const autouser = (username: string) => {
  formInline.username = username;
  formInline.password = "";
};
const rules = reactive<Rules>({
  username: [
    {
      required: true,
      message: "请正确输入账号",
      type: "string",
    },
  ],
  password: [
    {
      required: true,
      message: "请正确输入密码",
      type: "string",
      min: 6,
      max: 11,
    },
  ],
});
//提交函数
const onLogin = () => {
  form.value?.validate(async (validate) => {
    if (validate) {
      if (!(await login(formInline))) {
        centerDialogVisible.value = true;
      }
    } else {
      ElMessage.error("请正确输入账户密码");
    }
  });
};
const dd = () => {
  console.log("请联系MYing实验室");
};
</script>

<style scoped lang="scss">
:deep(.down-menu) {
  width: 200px;
  padding-left: 20px;
}
</style>
