const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
// tea.email = "s@sk.com"
console.log(tea.email);