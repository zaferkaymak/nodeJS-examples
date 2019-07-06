const fs = require('fs');

// Reading a file
fs.readFile(`${__dirname}/loremipsum.txt`, (error, data) => {
    if(!error)
        console.log(data.toString());
});

