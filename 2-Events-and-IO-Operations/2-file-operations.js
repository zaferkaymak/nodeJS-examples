const fs = require('fs');
// Reading a file
fs.readFile(`${__dirname}/loremipsum.txt`, (error, data) => {
    if(!error)
        console.log(data.toString());
});

// When you use appendFile, you can append a new text in the file.
fs.writeFile('test.txt', 'Hello World! \n', (error) => {
    if(error)
        throw error;
    console.log("New text was added");
});

fs.unlink('test.txt', (error) => {
    if(error)
        throw error;
    console.log("File was deleted");
});
