const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/js/index.js',
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
        // 运行基本目录
        contentBase:resolve(__dirname,'build'),
        // 监视文件目录下的所有文件，文件变化，就会reload
        watchContentBase:true,
        watchOptions:{
            ignored:/node_modules/
        },
        // 启动gzip压缩
        compress:true,
        // 指定端口号
        port:3000,
        host:'localhost',
        open:true,
        hot:true,
        // 不需要显示服务器日志信息
        clientLogLevel:'none',
        // 基本启动信息外，其他内容都不需要打印
        quiet:true,
        // 如果出错了，不要全屏提示
        overlay:false,
        //服务器代理 --> 解决开发环境跨域问题
        proxy:{
            // 一旦devserver(5000)服务器接收到/api/xxx请求，就会转发到另外一个服务器
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{
                    // 发送请求时，请求路径重写：将/api/xxx -->/xxx (去掉/api)
                    '^/api':''
                }
            }
        }
    }
}
