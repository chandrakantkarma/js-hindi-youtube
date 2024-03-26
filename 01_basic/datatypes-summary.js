// primitive datatypes

// 7 types: string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=true
const outsidTemp=null
let userEmail;  //by default undefined

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId);
// console.log("sk");

const bigNumber=138278192882n
//  referance(non-primitive)
// array,objects,functions

const heros=["shaktiman","nagaraj","doga"]
let myObj={
    name:"shivam",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}

// console.log(typeof score);      //number
// console.log(typeof scoreValue); //number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof outsidTemp); // object
// console.log(typeof id); // symbol
// console.log(typeof anotherId); //symbol
// console.log(typeof bigNumber); // bigint
// console.log(typeof heros); //object
// console.log(typeof myObj); //object
// console.log(typeof myFunction); //function