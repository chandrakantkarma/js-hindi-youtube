class User {
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
    // here "static" prevent the access of createId() function
    // some properties is not access to change by for user then we use static
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()); //gives error because of static

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }

}

const iphone = new Teacher("iphone","i@phone.com");
console.log(iphone.createId()) //error becouse of static