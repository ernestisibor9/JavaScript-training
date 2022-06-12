const fs = require('fs')
const myWrite = fs.writeFileSync('blog.js', 'Hello world', 'utf-8');
console.log(myWrite);