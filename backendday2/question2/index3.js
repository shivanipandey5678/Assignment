const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const filename = './largefile.txt';
const filename2 = './newfile.txt';
const operation = process.argv[2]; // Example: 'os', 'stream', 'crypto'

const encrypt = (text) => {
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encrypted = cipher.update(text, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
};

const displaySystemDetails = () => {
    console.log('OS Platform:', os.platform());
    console.log('OS Type:', os.type());
    console.log('OS Release:', os.release());
    console.log('CPU Architecture:', os.arch());
    console.log('CPU Cores:', os.cpus().length);
    console.log('Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
    console.log('Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');
    console.log('Home Directory:', os.homedir());
    console.log('Host Name:', os.hostname());
    console.log('Uptime:', os.uptime(), 'seconds');
};

switch (operation) {
    case 'os':
        displaySystemDetails();
        break;

    case 'stream':
        const readStream = fs.createReadStream(filename, { encoding: 'utf8' });
        readStream.on('data', (chunk) => console.log('Chunk received:', chunk));
        readStream.on('end', () => console.log('Finished reading the file.'));
        readStream.on('error', (err) => console.error('Error:', err.message));
        break;

    case 'crypto':
        const text = 'good morning';
        const encryptedText = encrypt(text);
        console.log('Encrypted:', encryptedText);
        break;

    default:
        console.log('Invalid operation. Use "os", "stream", or "crypto".');
        break;
}
