//Arrow Function

let arr=[1,2,3,4,5,6,7,8,9,10];
let num=[];
let odd=(a)=>{
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
       num.push(arr[i]);
    }
}
console.log(num);
}
odd(arr);

