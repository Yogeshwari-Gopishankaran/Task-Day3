//anonymous function & IIFE function
let arr=[1,2,3,4];
let result=0;
let sum=(a)=> {
for(let i=0;i<arr.length;i++){
  result=result+arr[i]
}
console.log(sum);
}
sum(arr);

