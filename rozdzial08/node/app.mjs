import fs from "fs/promises";

(async function () {
    await fs.writeFile("test-promises.txt", "Hello World")
    const readTxt = await fs.readFile("test-promises.txt", "utf-8");
    console.log(readTxt);
})();