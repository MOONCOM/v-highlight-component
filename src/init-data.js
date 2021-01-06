// 保存的初始值
// eslint-disable-next-line import/no-mutable-exports
export let init = {
  /*
  * 作用：组件的自定义类名
  * 类型：数组或者字符串
  * */
  class: undefined,
  /*
  * 作用：组件的自定义样式
  * 类型：对象
  * */
  style: undefined,
  /*
  * 作用：匹配字符的类名
  * 类型：字符串
  * 默认值：highlight
  * */
  selectedClass: 'highlight',
};

// 设置初始值
export function setInit(json) {
  init = { ...init, ...json };
}
