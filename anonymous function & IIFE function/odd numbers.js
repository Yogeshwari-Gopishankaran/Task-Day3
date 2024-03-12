//anonymous function & IIFE function

let arr=[1,2,3,4,5,6,7,8,9,10];
let num=[];
(function(a){
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
       num.push(arr[i]);
    }
}
console.log(num);
})(arr);

