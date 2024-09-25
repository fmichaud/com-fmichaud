const { create } = require('ipfs-http-client');
const fs = require('fs');

// Set up the client with Infura credentials
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: 'Basic ' + Buffer.from('<ProjectID>:<ProjectSecret>').toString('base64')
    }
});

async function uploadToIPFS() {
    try {
        const file = fs.readFileSync('path/to/your/file.html'); // Load the file to upload
        const added = await client.add(file); // Upload to IPFS
        console.log('File successfully uploaded to IPFS: ', added.path); // Log the IPFS CID
    } catch (error) {
        console.error('Error uploading to IPFS: ', error);
    }
}

uploadToIPFS();

