const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
// const HtmlWebpackPlugin=require('html-webpack-plugin')


/* 
    入口文件：入口起点
    1.string  -->单入口
    指定一个js文件指定入口，形成一个chunk，输出一个bundle文件
    chunk名字叫main
    2.array  --> 多入口   //在hmr中热更新html文件
    所有文件最终会形成一个chunk 输出只有一个bundle文件
    3.object --> 多入口
    有几个入口文件形成几个chunk


    -->特殊用法
*/

module.exports={
    entry:{
        index:['./src/js/index.js','./src/js/b.js'],
        a:'./src/js/a.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'build')
    },
    module:{},
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'
}