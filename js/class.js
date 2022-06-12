class User {
    constructor(name, email){
        this.name = name;
        this.email = email
    }
    login (){
        console.log(this.name, 'has just login');
    }
}

const userOne = new User('Ernest', 'ernestisibor9@gmail.com')
const userTwo = new User('Peter', 'peter4ril@gmail.com')

console.log(userOne);
console.log(userOne.login());
console.log(userTwo);
console.log(userTwo.login());