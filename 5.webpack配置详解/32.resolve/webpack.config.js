const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
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
    entry:'./src/js/index.js',
    output:{
        // 文件名称（指定目录)
        filename:'js/[name].js',
        path:path.resolve(__dirname,'build'),
        // 所有输出资源的公共路径 --》路径的前面
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development',
    // 解析模块配置
    resolve:{
        // 解析路径别名,优点简写路径
        alias:{
            $css:resolve(__dirname,'src/css')
        },
        extensions:['.js','.json','.css'],
        // 告诉webpack解析模块是去那个目录找
        modules:[resolve(__dirname,'../../node_modules'),'node_modules']
    }
}