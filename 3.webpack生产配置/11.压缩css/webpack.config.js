const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')

// console.log(process.env.NODE_ENV);
// process.env.NODE_ENV='development';

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:[
                    MiniCssExtractPlugin.loader
                    ,
                    'css-loader'
                    ,
                    // css兼容处理 postcss-->postcss-loader postcss-preset-env
                    //'postcss-loader
                    // "browserslist":{
                    //  开发环境-->设置环境变量: process.env.NODE_ENV 
                    //     "development":[
                    //       "last 1 chrom version",
                    //       "last 1 firefox version"
                    //     ],
                    //     "production":[
                    //       ">0.2%",
                    //       "not dead",
                    //       "not op_mini all"
                    //     ]
                    //   }
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         ident:'postcss',
                    //         plugins:()=>[
                    //             require('postcss-preset-env')()
                    //         ]
                    //     }
                    // }
            ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin(
            {
                filename:'css/main.css'
            }
        ),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode:'development'
}
