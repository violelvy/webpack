// ES Moudule 模块引入方式
// Common js
// CMD
// AMD
// webpack 核心定义是模块打包工具
// webpack 可以打包任何文件
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js'


var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
new Header();
new Sidebar();
new Content()