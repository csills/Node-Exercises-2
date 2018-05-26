const gmThumbnail = require('./downloadAndCreateThumbnail');

const url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
const filename = 'js-logo.png';
const thumbnailFilename = 'js-logo-small.png';

gmThumbnail.downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
});