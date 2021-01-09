const { resolve } = require("path");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const TerserWebpackPlugin=require('terser-webpack-plugin')



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
    // entry:{
    //     index:'./src/js/index.js',
    //     test:'./src/js/test.js'
    // },
    entry:'./src/js/index.js',
    output:{
        filename:'js/[name].[contenthash:10].js',
        path:resolve(__dirname,'build'),
        chunkFilename:'js/[name].[contenthash:10]_chunks.js'
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
        })
    ],
    optimization:{
        splitChunks:{
            chunks:'all',
            // 默认值
            // miniSize:30*1024, //分割的chunk最小30kb
            // maxSize:0,  //最大没有限制
            // minChunks:1, //最少被引入一次
            // maxAsyncRequest:5,   //按需加载最大数量
            // maxInitialRequest:3,  //入口js文件最大并行请求数量
            // automaticNameDelimiter:'~',  //文件连接符
            // name:true,
            // cacheGroup:{
            //     //分割chunk的组
            //     vendors:{
            //         test:/[\\/]node_modulse[\\/]/,
            //         priority:-10
            //     },
            //     default:{
            //         minChunks:2,
            //         priority:-20,
            //         reuseExistingChunk:true
            //     }
            // }
        },
        //修改a文件导致b文件hash变化
        runtimeChunk:{
            name:entrypoint=> `runtime-${entrypoint.name}`
        },
        minimizer:[
            //配置生产环境压缩方案 js/css
            new TerserWebpackPlugin({
                // 开启缓存
              cache:true,
            //   开启多进程打包
              parallel:true,
              sourceMap:true
            })
        ]
    },
    mode:'production',
    // devtool:'source-map'
}