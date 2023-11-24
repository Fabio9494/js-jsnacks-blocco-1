length_array=parseInt(prompt("numero elementi array"));
let array=[];
for(let i=0;i<length_array;i++){
    n = Math.floor(Math.random() * 100);
    array.push(n);
}
console.log("array");
console.log(array);
if(length_array>=5){
    console.log(array.slice(length_array-5,length_array));
}
else {
    console.log("INSERISCI UN NUMERO DI ELEMTI MAGGIORE O UGUALE A 5")
}

//bonus
let = coda = parseInt(prompt("numero elementi da stampare"));
console.log("elenti da stampare: ultimi "+coda);
if(coda<=length_array){
    console.log(array.slice(length_array-coda,length_array));
}
else{
    console.log("INSERISCI UN NUMERO DI ELEMTI MINORE O UGUALE ALLA LUNGHEZZA DELL'ARRAY")
}