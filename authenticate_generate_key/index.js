const crypto = require('crypto');
const fs = require('fs');

// Replace with your actual private key and public key
const privateKeyPem = fs.readFileSync('./private-key2.pem', 'utf8');
const publicKeyPem = fs.readFileSync('./public-key2.pem', 'utf8');

// Convert the public key to a format that can be signed
const publicKeyBuffer = Buffer.from(publicKeyPem);

// Create a sign object
const sign = crypto.createSign('SHA256');
sign.update(publicKeyBuffer);
sign.end();

// Sign the public key with the private key
const signature = sign.sign(privateKeyPem, 'hex');

console.log('Signature:', signature);

