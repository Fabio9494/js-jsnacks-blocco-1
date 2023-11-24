let a=[1,2,3,4,7];
let b=[1,2,9,8,7,5,4,8,9,9,7];
console.log(a);
console.log(b);

if(a.length>b.length){
    let differenza=a.length-b.length;
    console.log("inserisci " + differenza + " elemnti al vettore b");
    for(i=0;i<differenza;i++){
        let nuovo_elemento = parseInt(prompt("inserisci nuovo elemento"));
        b.push(nuovo_elemento);
    }
}
else if(a.length<b.length){
    let differenza=b.length-a.length;
    console.log("inserisci " + differenza + " elemnti al vettore a");
    for(i=0;i<differenza;i++){
        let nuovo_elemento = parseInt(prompt("inserisci nuovo elemento"));
        a.push(nuovo_elemento);
    }
}

console.log("Vettore a");
console.log(a);
console.log("Vettore b");
console.log(b);