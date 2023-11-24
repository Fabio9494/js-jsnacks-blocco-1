length_array=parseInt(prompt("numero elementi array"));
let array=[];
for(let i=0;i<length_array;i++){
    n = Math.floor(Math.random() * 100);
    array.push(n);
}
console.log(array);
console.log(array.slice(length_array-5,length_array));