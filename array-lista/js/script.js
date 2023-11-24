console.log("Frigo pieno di frutta");
let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fruits);
console.log("ma guarda un po', c'è proprio una bella pesca sul tavolo, meglio metterla in frigo")
fruits.push("pesca");
console.log("Frigo pieno di frutta dopo aver notato una bella pesca sul tavolo");
console.log(fruits);
let cocomero = "cocomero";
let flag=0;
for(let i=0;i<fruits.length;i++){
    if(fruits[i]=="cocomero"){
        flag=1;
    }
}
console.log("Ma il cocomero c'è?")
if(flag==1){
    console.log("Trovato! Devo solo preparare il cocktail.");
}
else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}