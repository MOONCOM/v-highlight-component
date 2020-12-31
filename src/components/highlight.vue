<!--
  @name: 根据查询的字段使句子高亮显示
  @description:
  @author: MOONCOM
  @time: 2020/12/22
-->
<template>
  <component :class="['highlight-content', init.class]" :is="tag" :style="init.style">
    <template v-for="item of operateMessage">{{item.message}}<span class="highlight">{{item.word}}</span></template>
  </component>
</template>

<script>
  import {init} from "../init-data";

  export default {
    name: 'highlight',
    props:{
      // 要高亮的关键字数组
      search:{
        type: Array,
        default(){
          return [];
        },
      },
      // 要展示的信息
      message:{
        type: String,
        default: '',
      },
      // 定义最外层的标签，默认为div
      tag:{
        type: String,
        default: 'div',
      },
    },
    data(){
      return{
        // 初始化配置
        init,
      };
    },
    computed:{
      // 将要展示的信息按照关键字截取
      operateMessage(){
        let resultArray = [{word:'',message:this.message}];
        this.search.forEach(selectedWord=>{
          const store = [];
          resultArray.forEach(({word,message})=>{
            const result = this.splitMessage(message,selectedWord);
            if(result.length>0){
              // 分割信息被分割词匹配分割
              store.push(...result);
              store.push({word,message: ''});
            }else{
              // 分割信息中没有分割词
              store.push({word,message});
            }
          });
          resultArray = store;
        });
        return resultArray.filter(({word,message})=>(word !== '' || message !== ''));
      },
    },
    methods:{
      // 使用分隔词对分割信息进行切割
      splitMessage(message,word){
        const result = [];
        // 第一次截取的结果
        const splitArray = message.split(word);
        splitArray.forEach(value=>{
          result.push({message:value,word});
        });

        // 将最后一个分割信息的分隔词删掉
        const length = result.length;
        if(length>0){
          result[length-1].word = '';
        }

        return result;
      },
    },
  }
</script>

<style>
  .highlight-content .highlight{
    color:red;
  }
</style>
