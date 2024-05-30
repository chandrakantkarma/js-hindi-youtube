// for of

// ["","","",]
// [{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// maps => maps is a unique value of paires

const map= new Map()

map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")
// map.set('IN',"India") //if we rewrite any pair then it will print only one

// console.log(map) 
for(const [key,value] of map){
    // console.log(key, ':-', value);
}

const myObject={
    'game1':"NFS",
    'game2':"Spiderman"
}
// for(const [ket,value] of myObject){
//     console.log(key, ':-', value);
// }  //error