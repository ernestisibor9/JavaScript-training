const users = {
    name: 'Seun',
    mobile: 0808635590,
    calculateTax: function (){
        console.log(`Your phone number is ${this.mobile}`);
    }
}

// console.log(users.calculateTax());

for(let key in users){
    console.log(key, users[key]);
}
