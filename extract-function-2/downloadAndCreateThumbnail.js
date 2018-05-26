const fs = require('fs');
const gm = require('gm');
const request = require('request');


function downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback) {
    const requestOptions = {
        url: url,
        encoding: null
    };

    request(requestOptions, (err, response, data) => {
        if (err) {
            console.log(err.message);
            return;
        }

        fs.writeFile(filename, data, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            gm(filename)
            .resize(240, 240)
            .write(thumbnailFilename, (err) => {
                if (err) {
                console.log(err.message);
                return;
                }
                console.log('It worked');
            });
        });
    });
};

module.exports = { downloadAndCreateThumbnail };