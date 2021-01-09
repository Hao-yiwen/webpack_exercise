/*
*  webpack.config.js webpack配置文件
*       作用：指示webpack 干那些活 （当运行webpack时会加载里面的配置）
*
*       所有构建工具都是基于nodejs平台运行的———模块化默认使用commonjs
* */
//用来拼接绝对路径
const {resolve}=require('path')

module.exports={
    //webpack配置
    //入口文件
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename:'built.js',
        //输出路劲
        //__dirname nodejs的变量，代表当前文件的绝对路径
        path:resolve(__dirname,'build')
    },
    //loader配置
    module:{
        rules:[
            //详细loader配置
            {
                test:/\.css$/,
                //使用那些loader处理
                use:[
                    //use中loader执行顺序：从右到左，从下到上，依次执行
                    //创建style标签，将js中的样式资源插入进行，添加到header中生效
                    'style-loader',
                //    css处理
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //将less文件转化cssloader
                    'less-loader'
                ]
            }
        ]
    },
    //plugins的配置
    plugins:[
        // 详细
    ],
    mode:'development',
    // mode:'production'
}
