const { resolve } = require("path");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')


// 缓存：
//  babel缓存：
//  cacheDirectory:true
// 文件资源缓存：
//  hash：每次webpack构建时会生成一个唯一的hash值。
//      问题：因为js和css使用同一个hash值
//      重新打包可能导致所有缓存失效
//  chunkhash:根据chunk生成的hash，如果打包来源于同一个chunk，hash值一样
//   css在js中引入，所以属于一个chunk
// contenthash:根据文件内容生成hash。不同文件hash值不一样


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
    mode:'production',
    devtool:'source-map'
}