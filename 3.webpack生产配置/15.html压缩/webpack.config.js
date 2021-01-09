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
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html',
                minify:{
                    // 移除空格
                    collapseWhitespace:true,
                    // 移除注释
                    removeComments:true
                }
            }
        )
    ],
    //生产环境自动压缩js代码
    mode:'production'
}