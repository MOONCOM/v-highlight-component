import Vue from 'vue';
import DemoComponent from './demo/demo.vue';
import highlight from "./index";

Vue.use(highlight,{class:'MOONCOM zhangsan',style:{color:'#ff0'}});
new Vue({
  render: h => h(DemoComponent),
}).$mount('#app');
