const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());


const crypto = require('crypto');
const secretKey = crypto.randomBytes(32); 
console.log(secretKey)