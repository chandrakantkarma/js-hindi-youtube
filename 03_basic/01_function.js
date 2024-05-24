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
console.log(loginUserMessage("shivam"));  //undefined,logged in

