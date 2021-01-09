// import add from './a.js'
import count from './b.js'


import ('./a.js')
    .then(({add})=>{
        console.log(add(1,2));
    })
    .cathch(
        (err)=>{
            console.log(err);
        }
    )
// console.log(add(4,5));
console.log(count(4,5));