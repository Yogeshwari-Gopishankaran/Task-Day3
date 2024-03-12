//anonymous function & IIFE function

let arr1=[1,4,8,5,3].sort();
let arr2=[2,9,4,7,1].sort();
let arr=[];
let len1=arr1.length-1;
let median;
for(let i=0;i<arr1.length;i++){
    arr.push(arr1[i]);
}
for(let i=0;i<arr2.length;i++){
    arr.push(arr2[i]);
}
let len2=arr.length-1;
(function(arr){
    if(arr.length%2!=0){
        median=arr(Math.floor((arr.length-1)/2));
       
    }else {
        median=(arr[len1]+arr[len2])/2;
    }
    console.log(median);   
}
)(arr);


