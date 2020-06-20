import Vue from 'vue';
import App from './App';
import Amplify from 'aws-amplify';
import { components } from 'aws-amplify-vue';
import {
  Button,
  Col,
  Row,
  Card,
  Layout,
  Icon,
  Drawer,
  Tooltip,
  Pagination,
  Spin,
  Form,
  Input,
  Modal,
  message,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueLazyload from 'vue-lazyload';
import store from './store/store';
import aws_exports from './aws-exports';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueLazyload);
Vue.component(Button.name, Button);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(Card.name, Card);
Vue.component(Layout.name, Layout);
Vue.component(Icon.name, Icon);
Vue.component(Drawer.name, Drawer);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Pagination.name, Pagination);
Vue.component(Modal.name, Modal);
// 注册 header 内部属性
Vue.component(Layout.Header.name, Layout.Header);

Vue.component(Spin.name, Spin);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(Form.Item.name, Form.Item);

Vue.prototype.$message = message;

Amplify.configure(aws_exports);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App,
    ...components,
  },
});
