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
            // {
            //     test:/\.js$/,
            //     exclude:/node_modules/,
            //     loader:'eslint-loader',
            //     options:{
            //         fix:true
            //     }
            // }
            {
                test:/\.js$/,
                exclude:/node-modules/,
                //1. 只能转换基本语法
                // 2.全部兼容性处理@babel/polyfill
                // 只解决部分兼容性问题，全部引入体积太大
                // 3.按需加载-->corejs

                loader:'babel-loader',
                options:{
                    // 预设
                    presets:[
                        '@babel/preset-env',
                        {
                            useBuiltIns:'usage',
                            corejs:{
                                version:3
                            },
                            targets:{
                                chrome:'60',
                                firefox:'60',
                                ie:'9'
                            }
                        }
                ]
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