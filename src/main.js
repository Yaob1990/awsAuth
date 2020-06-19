import Vue from 'vue';
import App from './App'
import router from './router';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { components } from 'aws-amplify-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "./store/store"
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(VueLazyload)

Amplify.configure(aws_exports)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  router: router,
  template: '<App/>',
  components: {
    App,
    ...components
  }
})
