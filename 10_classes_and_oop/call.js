function setUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username);
    // .call holds reference becouse of that username is not lost if we don't write .call then username is lost
    // and we need to send our this as parameter to the calling function for the reference
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);