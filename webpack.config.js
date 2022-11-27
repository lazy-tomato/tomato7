const path = require('path')

module.exports = {
  // 1.入口文件  从那个文件打包入口文件（相对路径）
  entry: './src/index.js',

  // 2.输出内容   一个是文件名 一个是输出路径（绝对路径）
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 3. 加载器
  module: {
    rules: [
      // loader 的配置
    ],
  },

  // 4. 插件
  plugins: [],

  // 5. 模式 // production
  mode: 'development',
}
