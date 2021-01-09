console.log('index.js被加载');

// import {mul} from "./test.js"
import $ from 'jquery'

// document.getElementById('btn').onclick=function(){
//   console.log(mul(4,5));
// }

$('.btn').click(function(){
  // 懒加载：当文件需要时加载
  // 预加载：在使用之前，提前加载js文件
  // console.log(mul(4,5));
  // 正常加载理解为并行加载(同一时间加载)
  // 预加载：等其他资源记载完毕，浏览器空闲偷偷加载   --兼容性差
  import(/* webpackChunkName:'test',webpackPrefetch:true */'./test.js')
  .then(({mul})=>{
    console.log(mul(4,5));
  })
  .catch((err)=>{
    console.log(err);
  })
})