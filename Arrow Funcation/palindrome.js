//Arrow Function

let str=['level','world','madam'];
let result=[];
let palindrome= (a)=>{
for(let i=0;i<a.length;i++){
    let reverse=a[i].split("").reverse().join("");
    if(a[i]==reverse){
        result.push(a[i]);
    }
}
console.log(result);
}
palindrome(str);
