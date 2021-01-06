import highlight from './components/highlight.vue';
import { setInit } from './init-data';

export default function (Vue, options) {
  // 设置初始值
  setInit(options);
  Vue.component('v-highlight-component', highlight);
}
