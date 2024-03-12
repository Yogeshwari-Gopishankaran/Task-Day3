//anonymous function & IIFE functionl
let str=['level','world','madam'];
let result=[];
(function (a){
for(let i=0;i<a.length;i++){
    let reverse=a[i].split("").reverse().join("");
    if(str[i]==reverse){
        result.push(a[i]);
    }
}
console.log(result);
})(str);
