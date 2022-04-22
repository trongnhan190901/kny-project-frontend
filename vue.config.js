const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 1024,
    proxy: {
     
      "/api": {
        target: "http://localhost:1025/",
        changeOrigin: true,
      },
    
  }
}
})