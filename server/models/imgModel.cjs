const fs = require('fs');
const { google } = require('googleapis')
const GOOGLE_API_FOLDER_ID = '1g9gSvyra3w5wgNyKzoSe8lCJ7Kz80Nup'

async function uploadFile(name,img ){
    try{
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

    }catch(err){
        console.log('Upload file error', err)
    }
}

uploadFile('name', "./teste.png").then(data => {
    console.log(data)
    
})