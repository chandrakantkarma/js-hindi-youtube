// promise one

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
}) 
promiseOne.then(function(){
    console.log("promise consumed");
})

// promise two

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task-2 is complete");
        resolve();
    },1000  );
}).then(function(){
    console.log("promise-2 consumed");
})

// promise three

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// promise four

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"hitesh",password:"1234"})
        }else{
            reject('ERROR:Something went wrong!')
        }
    },1000)
})

promiseFour.
then(function(user){
    console.log(user);
    return user.username;
}).
then((username) => {
    console.log(username);
}).
catch(function(error){
    console.log(error)
}).
finally(() => console.log("The promise is either resolved or rejected"))

// this syntax is good for readability

// promise five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false;
        if(!error){
            resolve({username:"Javascript",password:"1234"})
        }else{
            reject('ERROR: JS went wrong!')
        }
    },1000)
})

async function consumedPromiseFive() {
   try {
        const response= await promiseFive
        console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumedPromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))