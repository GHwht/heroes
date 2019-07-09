// ES6的模块化语法 导入模块
import Vue from 'vue'

// 根组件
import App from './App.vue'

import router from './router';

import './assets/css/bootstrap/css/bootstrap.css'
import './assets/css/index.css'

// 自定义全局指令
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
      // 聚焦元素
      el.focus();
 }
});


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置实例选项 router 为你在上面 new 出来的 VueRouter 实例对象
  router
}).$mount('#app')
