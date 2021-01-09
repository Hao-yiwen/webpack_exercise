// import '../css/index.css';

// import $ from 'jquery'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// console.log(mul(2,3));

import (/* webpackChunkName:test */'./test.js')
  .then((result)=>{
    console.log('文件加载成功',result);
  })
  .catch(()=>{
    console.log('失败');
  })

console.log(sum(1, 2, 3, 4,5));
// console.log($);
