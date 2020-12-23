module.exports={
  css: { extract: false },
  configureWebpack: {
    externals:{
      /*babel: "@vue/cli-plugin-babel",
      vueCli: "@vue/cli-service",
      vueTemplate: "vue-template-compiler",
      core: "core-js",*/
      vue: "Vue"
    },
  }
};
