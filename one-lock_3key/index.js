const crypto = require('crypto');

// Function to encrypt data using AES-256 with a password
function encryptData(data, password) {
    const key = crypto.createHash('sha256').update(password).digest(); // Derive key from password
    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
}

// Function to decrypt data using AES-256 with a password
function decryptData(encryptedData, iv, password) {
    const key = crypto.createHash('sha256').update(password).digest(); // Derive key from password
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Main function to encrypt JSON with 3 passwords
function encryptJson(jsonData, passwords) {
    const jsonString = JSON.stringify(jsonData);

    // Encrypt the data once and encrypt the same data for each password separately
    const encryptedPackages = passwords.map(password => encryptData(jsonString, password));

    return encryptedPackages; // Return all encrypted versions
}

// Main function to decrypt using any password
function decryptJson(encryptedPackages, password) {
    for (let package of encryptedPackages) {
        try {
            const decryptedData = decryptData(package.encryptedData, package.iv, password);
            return JSON.parse(decryptedData); // Successfully decrypted, return the data
        } catch (error) {
            // Ignore if the decryption fails, try the next one
        }
    }
    throw new Error('Invalid password or no match found.');
}

// Usage example
const passwords = ['password1', 'password2', 'password3'];

const jsonData = { data: "A".repeat(100 * 1024 * 1024) };

// Encrypt the JSON data with all 3 passwords
const encryptedPackages = encryptJson(jsonData, passwords);
console.log('Encrypted Packages:', encryptedPackages);

// Decrypt using any one of the passwords
try {
    const decryptedData = decryptJson(encryptedPackages, 'password2');
    console.log('Decrypted Data:', decryptedData);
} catch (err) {
    console.log('Error:', err.message);
}