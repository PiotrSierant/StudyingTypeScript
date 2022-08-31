/*
import fs from "fs";

fs.writeFile("test.txt", "Witaj, świecie!", () => {
  fs.readFile("test.txt", "utf8", (err, msg) => {
    console.log(msg);
  });
});

*/

import fs from "fs/promises";

(async function () {
  await fs.writeFile("test-promise.txt", "Witajcie, Obietnice!");
  const readTxt = await fs.readFile("test-promise.txt", "utf-8");
  console.log(readTxt);
})();

