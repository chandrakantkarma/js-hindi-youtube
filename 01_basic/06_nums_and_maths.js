const score=400
// console.log(400);

const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length);//give length
// console.log(balance.toFixed(2));//give res at 2 floating poin

const otherNumber=123.792
// console.log(otherNumber.toPrecision(3));//by using these we can round off decimal point number

const hunreds=1000000
// console.log(hunreds.toLocaleString());
// console.log(hunreds.toLocaleString('en-IN'));//by using these we can convert in local type currency

// +++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-1));//=>1,it can convert negetibe val to positive val
// console.log(Math.round(4.6));//=>5,roundoff the num
// console.log(Math.ceil(4.2));//=>5,gives always top val
// console.log(Math.floor(4.9));//=>4,gives always bottom val
// console.log(Math.min(2,1,4,3));//=>1
// console.log(Math.max(2,1,4,3));//=>4

// console.log(Math.random());//gives random num b/w 0 ans 1
// console.log((Math.random()*10)+1); 
// console.log(Math.floor(Math.random()*10)+1);

const min=1
const max=6 

console.log(Math.floor(Math.random()*(max-min+1))+min);