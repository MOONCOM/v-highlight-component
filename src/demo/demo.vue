<template>
  <div class="demo">
    <fieldset>
      <legend>配置组件参数</legend>
      <div>
        message属性：<br>
        <textarea rows="6" v-model="message" class="value"/>
      </div>
      <div>
        search属性：（数组字段使用，分割）<br>
        <input type="text" v-model="searchOperate" class="value">
      </div>
      <div>
        tag属性：<br>
        <input type="text" v-model="tag" class="value">
      </div>
    </fieldset>
    <fieldset>
      <legend>这是结果区（组件的最终展示效果就是这样）</legend>
      <v-highlight-component :message="message" :search="search" :tag="tag"/>
    </fieldset>
  </div>
</template>
<script>
  export default {
    name: "demo.vue",
    data(){
      return{
        message:'欢迎来到v-high-light组件的示例页面，在这里您可以直观的看到该组件的展示效果，希望您' +
          '可以通过它快速的学会如何使用该组件，欢迎在issue中留下您发现的bug和建议',
        search: ['组件','您'],
        tag: 'span'
      };
    },
    computed:{
      searchOperate:{
        get(){
          return this.search;
        },
        set(text){
          this.search = text.split(',');
        },
      },
    },
  }
</script>

<style>
.value{
  width:360px;
}
</style>
