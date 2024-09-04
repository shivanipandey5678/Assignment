const fs = require('fs');
const path = require('path');

// Construct the path to the large file
const filePath = path.join(question2, 'largefile.txt');

// Create a readable stream
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// Handle data as it is read
readStream.on('data', (chunk) => {
  console.log(chunk); // Outputs the chunk of data read from the file
});

// Handle errors during reading
readStream.on('error', (err) => {
  console.error('Error reading file:', err.message);
});

// Handle the end of the file read
readStream.on('end', () => {
  console.log('Finished reading the file.');
});
