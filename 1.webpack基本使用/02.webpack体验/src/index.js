/*
* index.js 入口文件
*
*
* 1.运行指令：
* 开发环境：webpack 。/src/index.js -o ./build/built.js --mode=development
* 运行环境：webpack ./src/index.js -o ./build/built.js --mode=production
*
* 2.结论
*   1.webpack能处理js和json资源,不能处理css和img资源
*   2.生产环境将es6模块编译为浏览器能识别的模块化
*   2.生产环境比开发环境多一个压缩js
* */

import data from './data.json'
// import './index.css'

console.log(data)

function add(x,y) {
    return x+y;
}

console.log(add(1,2));
