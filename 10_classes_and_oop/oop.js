const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from darabase")
        // console.log(this.username)
        console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this; //if we don't write return this then there is no effect on our output so its optional
}

// const userOne = User("hitesh",12,true);
// const userTwo = User("chai",11,false);
// here if we call user another time then value will be over-write by second call
// so solution is new keyword


const userOne = new User("hitesh",12,true);
const userTwo = new User("chai",11,false);
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)

// jaaaavaaaaaaaascript by chai or code chai; or code  learnish.com             VHT