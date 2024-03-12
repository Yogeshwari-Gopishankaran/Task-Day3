//anonymous function & IIFE function

let k=1;
let arr=[1,3,5,7,9];
let rotate=[];
(function(arr,k){
    let n=arr.length;
    k=k%n;
for(let i=0;i<n;i++){
    rotate[(i+k)%n]=arr[i];
}
for(let i=0;i<n;i++){
    arr[i]=rotate[i];
}
console.log(arr);
})(arr,k)