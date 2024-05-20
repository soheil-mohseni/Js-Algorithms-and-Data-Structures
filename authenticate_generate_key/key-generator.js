const crypto = require('crypto');
const fs = require('fs');

// Generate RSA key pair
crypto.generateKeyPair('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  }
}, (err, publicKey, privateKey) => {
  if (err) {
    console.error('Error generating key pair:', err);
    return;
  }

  // Write the private key to a file
  fs.writeFile('private-key2.pem', privateKey, (err) => {
    if (err) {
      console.error('Error writing private key to file:', err);
      return;
    }
    console.log('Private key saved to private-key.pem');
  });

  // Write the public key to a file
  fs.writeFile('public-key2.pem', publicKey, (err) => {
    if (err) {
      console.error('Error writing public key to file:', err);
      return;
    }
    console.log('Public key saved to public-key.pem');
  });
});
