# webpack性能优化
* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化
* 优化打包构建速度
*   HMR         

* 优化代码调试
* source-map //eval-source-map —— development        source-map —— production
            


## 生产环境
* 打包速度块
*  oneof   一个文件需要两个loader，不能使用
*  缓存  babel缓存：cacheDirectory:true   
*   多进程打包  优化打包速度
* 优化代码运行性能
* 缓存(hash-chunkhash-contenthash):  
* tree-sharking:不打包没用的代码  es6 production
* code-split 单入口 多入口 chunk 动态加载
* lazy-loading 
* pwa
* extractnals
* dll