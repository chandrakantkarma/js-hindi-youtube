const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (nums) => nums+10 )
// console.log(newNums);

//"map" is also a function like "filter" but filter rutrns filtered values and map returns all values

const newNums= myNumbers
                        .map( (nums) => nums * 10 )
                        .map((nums) => nums + 1 )
                        .filter( (nums) => nums > 40 )
console.log(newNums);
