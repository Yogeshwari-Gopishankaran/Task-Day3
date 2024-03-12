//anonymous function & IIFE functionl
let arr=[1,2,3,4];
let num=[];
(function (a){
for(let i=0;i<arr.length;i++){
  if((a[i]===1)||(a[i]===2)){
      num.push(a[i]);
  }else if(a[i]%2!==0){
    num.push(a[i]);
  }
}
console.log(num);
})(arr);

