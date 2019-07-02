import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 配置babel.config按需引入
import { Button, Layout, Icon, Drawer } from "ant-design-vue";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
