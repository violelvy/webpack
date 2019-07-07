// ES Moudule 模块引入方式
// Common js
// CMD
// AMD
// webpack 核心定义是模块打包工具
// webpack 可以打包任何文件
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js'
// loader 的作用 webpack不能识别非JS的模块，通过loader识别。在webpack.config.js文件进行配置。

var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
var Pic = require('./bext.jpg')
console.log(Pic)
new Header();
new Sidebar();
new Content()