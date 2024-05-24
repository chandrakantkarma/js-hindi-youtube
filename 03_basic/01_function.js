function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");

}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    // console.log(number1+number2);
    let result=number1+number2;
    return result;
}
// addTwoNumber(8,9)
// addTwoNumber(8,"4")
// addTwoNumber(8,"a")
// addTwoNumber(8,null)

const result= addTwoNumber(8,4)
// console.log(result);

function loginUserMessage(username="sam"){
    if(username===undefined){
        return "please enter username"
    }
    return `${username},just logged in`
}//if we can give "username="sam"" than if we cant give any value then we got "sam" as return value 
// console.log(loginUserMessage("shivam")); //shivam,logged in
// console.log(loginUserMessage("")); // ,just logged in
// console.log(loginUserMessage("shivam"));  //undefined,logged in

function calculateCartPrice(val1,val2,...num1){
    return num1
}
 
console.log(calculateCartPrice(100,299,399,499));
//here first two values assign in val1 and val2 and another values in num1 and the result is 399 , 499

const user={
    username:"shivam",
    price:399
}
function handleObject(anyObject){
    // console.log(`username is ${anyObject.username}, and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username:"hitesh",
    price:299

})

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,500,300]));