
import fs from 'fs'
import zlib from 'zlib';
// Create a readable stream
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

// Listen for data events
readableStream.on('data', (chunk) => {
    console.log('Chunk received:', chunk);
});

// Listen for the end of the stream
readableStream.on('end', () => {
    console.log('Finished reading the file.');
});

/// writeable stream

const writeableStream = fs.createWriteStream('example.txt')

writeableStream.write(" New Data Received!");

writeableStream.end(() => {

    console.log(' Finished writing to the file');
});


/// Duplex streams in node js 


// transform stream 

// Create streams
const input = fs.createReadStream('example.txt');
const gzip = zlib.createGzip(); // Transform stream for compression
const output = fs.createWriteStream('example.txt.gz');

// Pipe the streams together
input.pipe(gzip).pipe(output);

output.on('finish', () => {
    console.log('File successfully compressed.');
});
