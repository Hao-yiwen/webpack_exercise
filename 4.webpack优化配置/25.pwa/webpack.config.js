const { resolve } = require("path");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const WorBoxWebpackPlugin=require('workbox-webpack-plugin')

/* 
    pwa:渐进式网络开发应用程序（离线可访问）
        workbox-->workbox-webpack-plugin
*/

/* 
    eslint不认识window,navigator全局变量
    解决:需要修改json中eslintConfig配置
    "env":{
        "browser":true
    }

    2.sw代码必须卸载服务器上
        --> nodejs
        -->
            npm i serve -g
            serve -s
*/
//设置nodejs环境变量，指定使用那个环境
process.env.NODE_ENV='production';

//服用loader
const commonCSS=[
    MiniCssExtractPlugin.loader,
    'css-loader',
    // {
    //     //在json中指定兼容什么浏览器
    //     loader:'postcss-loader',
    //     options:{
    //         ident:'postcss',
    //         plugins:()=>[
    //             require('postcss-preset-env')()
    //         ]
    //     }
    // }
]

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.[contenthash:10].js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            //一个文件被多个loader执行，一定执行先后顺序
                    // 先执行eslint后执行babel
        
        
                    // 在packagejson中设置airbnb规则
                    // {
                    //     test:/\.js$/,
                    //     exclude:/node_modules/,
                    //     enforce:'pre',
                    //     loader:'eslint-loader',
                    //     options:{
                    //         fix:true
                    //     }
                    // },
            {
                // 以下loader值指挥匹配一个
                // 不能有两配置处理同一个文件
                oneOf:[
                    {
                        test:/\.less/,
                        use:[
                            ...commonCSS,
                            'less-loader'
                        ]
                    },
                    {
                        test:/\.css/,
                        use:[
                            ...commonCSS
                        ]
                    },
                    {
                        test:/\.js$/,
                        exclude:/node_modules/,
                        use:[
                            //开启多进程打包
                            /* 
                                有利有弊：
                                    进程开启有时间：
                                只有工作时间比较长，才需要多进程打包
                            */
                            {
                                loader:'thread-loader',
                                options:{
                                    workers:2
                                }
                            },
                            {
                                loader:'babel-loader',
                                options:{
                                    presets:[
                                        '@babel/preset-env',
                                        // {
                                        //     useBuiltIns:'usage',
                                        //     corejs:{
                                        //         version:3
                                        //     },
                                        //     targets:{
                                        //         chrome:'60'
                                        //     }
                                        // }
                                    ],
                                    // 开启babel缓存，第二次构建才会读取缓存，速度更快
                                    cacheDirectory:true

                                }
                            }
                        ]
                    },
                    {
                        test:/\.(jpg|png|gif)$/,
                        loader:'url-loader',
                        options:{
                            limit:8*1024,
                            output:'imgs',
                            esModule:false
                        }
                    },
                    {
                        test:/\.html$/,
                        loader:'html-loader'
                    },
                    {
                        exclude:/\.(js|css|less|html|png|gif)/,
                        loader:'file-loader',
                        options:{
                            outputPath:'media'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/built.[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
        new WorBoxWebpackPlugin.GenerateSW(
            // 帮助serviceworker快速启动
            {
                clientsClaim:true,
                // 删除旧的serviceworker
                // 生成一个serviceworker配置文件
                skipWaiting:true
            }
        )
    ],
    mode:'production',
    devtool:'source-map'
}