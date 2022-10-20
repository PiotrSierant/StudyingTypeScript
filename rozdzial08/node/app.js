const fs = require('fs');
fs.writeFile("test.txt", "Witaj świecie!", () => {
    fs.readFile("test.txt", "utf-8", (err, msg) => {
        console.log(msg);
    })
})