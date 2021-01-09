const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    // 问题：因为url-loader默认使用es6去解析，而html-loader引入图片是commonjs
                    // 解析时会出现问题：[object module]
                    // 解决:关闭url-loader的es6模块 使用commonjs
                    esModule:false,
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                // 处理html文件img图片
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}
