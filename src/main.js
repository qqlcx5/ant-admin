import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 权利颗粒化-组件
import Authorized from "./components/Authorized";
Vue.component("Authorized", Authorized);
// 权利颗粒化-自定义指令
import Auth from "./directives/auth";
Vue.use(Auth);

// 配置babel.config按需引入
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input
} from "ant-design-vue";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
