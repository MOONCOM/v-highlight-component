# v-highlight-component

### 功能介绍
> 实现了一个句子根据查询字词进行高亮显示的功能，查询的字词的输入格式为数组（为了
> 兼容分词查询功能），根据字词数组的内容进行多个词的高亮展示。使用模板差值 {{ }} 和
> v-text，而不是v-html进行高亮字词的展示，减少XSS攻击的风险

### 下载插件
```
npm install v-highlight-component
```

### 参数
#### search
* 类型：Array 数组
* 默认值： [ ] 空数组
* 作用：要进行查询的字词数组
* 备注：当不进行字词查询时可以不传或者设为空数组
#### message
* 类型：String 字符串 
* 默认值： ' ' 空字符串
* 作用：要进行高亮查询匹配的内容
#### tag
* 类型：String 字符串 
* 默认值： 'div' div标签
* 作用：查询内容的包裹标签，默认使用div标签包裹，可根据实际需求使用span
或者p标签进行包裹

### 使用
下载成功后在main.js中插入如下代码
```
// 引入组件
import highlight from 'v-highlight-component';
// 注册为全局组件
Vue.component('v-highlight-component',highlight);
```
在需要查询字词高亮展示的页面组件中使用
```
<template>
    ...
    <v-highlight-component :message='message' :search='search'/>
    ...
</template>
<script>
export default{
    data(){
        return{
            message:'这是一个句子，要进行高亮匹配',
            search: ['句子','高亮'],
        };
    },
};
</script>
```

### 在线演示
后续开放

### 兼容性
> 这是基于vue2开发的功能组件，因为没有使用vue2高版本的特性，所以理论上兼容所有的
> vue2版本 

