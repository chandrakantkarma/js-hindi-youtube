const conding=["js","ruby","java","python",".net"]

// conding.forEach(function (val){
//     console.log(val);
// })

// conding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
// conding.forEach(printMe)

// conding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myConding= [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myConding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
} )