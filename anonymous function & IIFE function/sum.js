//anonymous function & IIFE function
let arr=[1,2,3,4];
let sum=0;
(function (a){
for(let i=0;i<arr.length;i++){
  sum=sum+arr[i]
}
console.log(sum);
})(arr);

