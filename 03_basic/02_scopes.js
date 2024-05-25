var c=300
let a=300
if(true){
    let a=10
    const b=20
    // var c = 30
    c =30 //here we changed c=300 to c=30
    // console.log("INNER: ",a);
}

// console.log(a); //error
// console.log(b); //error
// console.log(c);    // 30

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);  //error
    two()
}
// one()

if(true){
    const username= "hitesh"
    if(username === "hitesh"){
        const website=" youtube"
        // console.log(username+website);
    }
        // console.log(website);
}
// console.log(username);


// +++++++++++++++++ Intresting +++++++++++++++++++++++++++


console.log(addOne(5));
function addOne(num){
    return num+1
}

// console.log(addTwo(5)); //error

const addTwo = function(num){
    return num+2
}
// console.log(addTwo(5)); //7

// if we declare any function as a variable then we cant use that perticuler function calling before function defination
