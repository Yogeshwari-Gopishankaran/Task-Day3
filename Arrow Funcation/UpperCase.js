//anonymous function & IIFE function
let string=['hi','hello','world'];
let result=[];
let upperCase= (arr)=>{
for(let i=0;i<string.length;i++){
  result.push(string[i].toUpperCase());
 
}
console.log(result);
}
upperCase(string);