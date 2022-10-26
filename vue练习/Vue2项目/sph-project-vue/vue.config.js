const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/sph': {
        target: 'http://sph-h5-api.atguigu.cn',
        changeOrigin: true,
        pathRewrite: {
          '/sph': ''
        }
      }
    }
  }
})
