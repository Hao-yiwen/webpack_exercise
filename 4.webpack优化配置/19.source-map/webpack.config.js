const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:['./src/js/index.js','./src/index.html'],
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.less/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            },
            //处理图片资源
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10].[ext]',
                    esModule:false,
                    outputPath:'imgs'
                }
            },
            {
                test:/\.html/,
                loader:'html-loader'
            },
            {
                exclude:/\.(html|js|css|less|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]',
                    outputPath:'media'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',

    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:3000,
        open:true,
        // hmr功能
        hot:true
    },
    devtool:'eval-source-map'
}
// source-map：提供源代码到构建后代码的映射技术（如果构建后代码出错了，通过映射关系追踪到源代码错误）
//  devtool:'source-map'
// [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
// inline-source-map    内联source-map 只生成一个文件的内联source-map
// hidden-source-map    外部 在外部生成
// eval-source-map      每一个文件对应生成一个source-map
// nosources-source-map:提示代码错误，没有错误位置
// 
// 内联和外部区别：
// 1.外部生成文件，内部没有
// 2.内联构建速度更快
// 
// 开发环境：
// 速度快一点，调试更友好
// 速度快
// eval>inline>...
// 更友好
// source-map
// cheap-cheap-moudle-map

// eval sourcemap
// 
// 生产环境：
// 源代码要不要隐藏，调试要不要更友好
// 生产环境内敛体积大，不考虑
// nosources-source-map  全部隐藏
// hidden-source-map 部分隐藏
// 
// source-map/cheap-moudle-source-map