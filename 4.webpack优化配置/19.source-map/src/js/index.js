import '../css/iconfont.css'
import '../css/index.less'
import print from './print.js'

console.log('index.js文件被加载了');

print();

console.log(314);

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('重新构建');
        print();
    })
}
