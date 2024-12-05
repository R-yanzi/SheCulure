// 导入全局样式
import "./assets/css/global.css";
// 导入element-plus样式
import "element-plus/dist/index.css";
// 统一导入el-icon图标
import * as ElIconModules from "@element-plus/icons-vue";
import { createApp } from "vue";
import App from "./App.vue";
// 导入路由
import router from "./router";
// 导入element-plus
import ElementPlus from "element-plus";
// 导入vuex
import store from "./store";
// 引入 jQuery
import $ from 'jquery';
// 引入 mapvgl
import mapvgl from 'mapvgl'

const app = createApp(App);

// 使用插件
app.use(ElementPlus);
app.use(router);
app.use(store)
app.use(mapvgl)

// 统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName])
}

// 将 jQuery 挂载到全局对象上
window.$ = window.jQuery = $

app.mount("#app");
