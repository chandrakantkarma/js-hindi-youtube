const myarr=[0,1,2,3,4,5]
const myHeros=["shaktiman","gangadhar"]

const myarr2= new Array(1,2,3,4)
// console.log(myarr[0]);

// array methods

// myarr.push(6)
// myarr.pop()


// myarr.unshift(9) //=>insert ek=lement at 0th index
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));

// const newArr=myarr.join()
// console.log(newArr);=>string type newArr
// console.log(myarr);=>print array

// slice,splice

// console.log("A",myarr);

// const myn1=myarr.slice(1,3)
// console.log(myn1);
// console.log(myarr);

console.log("A",myarr);

const myn1=myarr.splice(1,3)
console.log(myn1);
console.log(myarr);

// splice manupulated original array and slice not
// slice work as copy operation and splice work as move operation