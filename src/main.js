import Vue from 'vue';
import App from './App'
import router from './router';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { components } from 'aws-amplify-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

Amplify.configure(aws_exports)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {
    App,
    ...components
  }
})
