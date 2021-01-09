/* 

    使用dll技术对某些库单独打包：jquery

    当你运行webpack时，默认查找webpack.config.js配置文件
    需求：运行webpack.dll.js
        --> webpack --config webpack.dll.js
*/
const {resolve}=require('path')
const webpack=require('webpack')

module.exports={
    entry:{
        // 打包生成[name] -->jquery
        jquery:['jquery']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dll'),
        library:'[name]_[hash]',//打包的库向外暴露的值
    },
    plugins:[
        new webpack.DllPlugin(
            {
                name:'[name]__[hash]',
                path:resolve(__dirname,'dll/mainfest.json')
            }
        )
    ],
    mode:'production'
}