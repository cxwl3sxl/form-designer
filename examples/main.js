import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import componts from './../packages/index'

import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.use(componts);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
