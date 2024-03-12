//anonymous function & IIFE functionl
let str=[1,2,3,2,1,4,5,6];
let result=[];
let map={};
(function (arr){
for(let i=0;i<arr.length;i++){
    if(map[arr[i]])
    continue;
    else{
        result.push(arr[i]);
        map[arr[i]]=true;
    }
}
console.log(result);
})(str);
