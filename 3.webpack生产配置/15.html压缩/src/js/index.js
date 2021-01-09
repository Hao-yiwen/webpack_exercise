import '@babel/polyfill'

const add=(x,y)=>{
  return x+y;
}

// 下一行不进行eslint检查
// eslint-disable-next-line
console.log(add(4, 5));

const promise=new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('hello');
    resolve();
  },1000)
})
console.log(promise);
