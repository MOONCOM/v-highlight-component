<template>
  <div class="demo">
    <fieldset>
      <legend>配置组件参数</legend>
      <div>
        message属性：<br>
        <textarea
          v-model="message"
          rows="6"
          class="value"
        />
      </div>
      <div>
        search属性：（数组字段使用，分割）<br>
        <input
          v-model="searchOperate"
          type="text"
          class="value"
        >
      </div>
      <div>
        tag属性：<br>
        <input
          v-model="tag"
          type="text"
          class="value"
        >
      </div>
    </fieldset>
    <fieldset>
      <legend>这是结果区（组件的最终展示效果就是这样）</legend>
      <v-highlight-component
        :message="message"
        :search="search"
        :tag="tag"
      />
    </fieldset>
  </div>
</template>
<script>
export default {
  name: 'DemoVue',
  data() {
    return {
      message: '欢迎来到v-high-light组件的示例页面，在这里您可以直观的看到该组件的展示效果，希望您'
          + '可以通过它快速的学会如何使用该组件，欢迎在issue中留下您发现的bug和建议',
      search: ['组件', '您'],
      tag: 'span',
    };
  },
  computed: {
    searchOperate: {
      get() {
        return this.search;
      },
      set(text) {
        this.search = text.split(',');
      },
    },
  },
};
</script>

<style>
.value{
  width:360px;
}
</style>
