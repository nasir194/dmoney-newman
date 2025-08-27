const newman = require('newman');
require('dotenv').config();npm 
 
newman.run({
    collection:`https://api.postman.com/collections/47684725-b4118f46-1d1c-4bda-b40a-5d13016d3ff2?access_key=${process.env.PMAT-KEY}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    //environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});