const save = require ('./saveWebPage');

save.saveWebPage (
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'output.html',
    () => {
        console.log('ran callback!')
    }
)