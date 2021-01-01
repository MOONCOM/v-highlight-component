import Vue from 'vue';
import DemoComponent from './demo.vue';
import highlight from "../index";

Vue.use(highlight,{class:'MOONCOM zhangsan',style:{color:'#0ff'}});
new Vue({
  render: h => h(DemoComponent),
}).$mount('#app');