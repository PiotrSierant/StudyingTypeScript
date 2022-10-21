// const fs = require('fs');
// fs.writeFile("test.txt", "Witaj świecie!", () => {
//     fs.readFile("test.txt", "utf-8", (err, msg) => {
//         console.log(msg);
//     })
// })

const fs = require('fs/promises');
(async function () {
    await fs.writeFile("test-promises.txt", "Hello World")
    const readTxt = await fs.readFile("test-promises.txt", "utf-8");
    console.log(readTxt);
})();