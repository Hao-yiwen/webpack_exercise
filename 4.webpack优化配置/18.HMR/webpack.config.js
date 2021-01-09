// hmr:hot module replacement 热模块替换
// 一个模块变化，只重新打包这一个模块
// 极大提高构建速度

// 样式文件：可以使用hmr功能，style-loader内部实现了
// js文件：默认没用hmr功能
// html:默认不能使用hmr功能，html文件不能热更新了
    // 解决：修改enrty入口，奖html文件引入


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
    }
}
