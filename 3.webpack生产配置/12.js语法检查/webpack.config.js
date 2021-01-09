const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} =require('path')

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            // 只检查用户自己的源代码
            // 设置检查规则：
            // package.json中eslintconfig设置
            // airbnb-->eslint-config-airbnb-base eslint eslint-plugin-import
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'eslint-loader',
                options:{
                    fix:true
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html'
            }
        )
    ],
    mode:'development'
}