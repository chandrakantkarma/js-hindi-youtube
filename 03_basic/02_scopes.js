var c=300
let a=300
if(true){
    let a=10
    const b=20
    // var c = 30
    c =30 //here we changed c=300 to c=30
    console.log("INNER: ",a);
}

// console.log(a); //error
// console.log(b); //error
console.log(c);    // 30

