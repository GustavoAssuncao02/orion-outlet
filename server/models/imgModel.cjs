const fs = require('fs');
const { google } = require('googleapis')
const GOOGLE_API_FOLDER_ID = '1g9gSvyra3w5wgNyKzoSe8lCJ7Kz80Nup'

async function uploadFile(name, img) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './Google.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': name,
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'image/*',
            body: fs.createReadStream(img)
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id
        //save this id in database

    } catch (err) {
        console.log('Upload file error', err)
    }
}
/*
uploadFile('name', "./teste.png").then(data => {
    console.log(data)
    
})
    */
    
async function downloadFile(fileId) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './Google.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        });

        const driveService = google.drive({
            version: 'v3',
            auth
        });

        const response = await driveService.files.get(
            { fileId: fileId, alt: 'media' },
            { responseType: 'stream' }
        );

        return new Promise((resolve, reject) => {
            const chunks = [];
            response.data
                .on('data', (chunk) => {
                    chunks.push(chunk);
                })
                .on('end', () => {
                    const buffer = Buffer.concat(chunks);
                    resolve(buffer);
                })
                .on('error', (err) => {
                    reject('Error downloading file: ' + err);
                });
        });

    } catch (err) {
        console.log('Download file error', err);
    }
}

/*
downloadFile('1JJyoJBZz_lw2Vx9upVq8u33M7ML0Bn13').then(data => {
    console.log('File downloaded successfully:', data);
    // You can now use the buffer 'data' as needed
}).catch(err => {
    console.log(err);
});
*/
