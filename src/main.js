// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import Form from './components/form'

Vue.component('Form',Form);//注册表单
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
//Vue.prototype.$imgUrl = 'http://192.168.2.105:8080/raonecloud/'
axios.defaults.baseURL = 'http://api-app.raonecloud.com/tools/salestools/api/';
//axios.defaults.baseURL = 'http://192.168.2.105:8080/raonecloud/api/';
//axios.defaults.baseURL = 'http://192.168.2.122:8080/salestools/api/';  
//axios.defaults.baseURL = 'http://192.168.2.105:8090/salestools/api/';  
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data(){
    return {
      sell_user_id:'11'
    }
  }
})
