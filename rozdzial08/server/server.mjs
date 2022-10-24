import http from 'http';
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Witaj, świecie!");
    } else if (req.url === "/a") {
        res.end("Witaj na trasie A");
    } else if (req.url === "/b") {
        res.end("Witaj na trasie B");
    } else if (req.url === "/c" && req.method === "POST") {
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const params = Buffer.concat(body);
            console.log("treść", params.toString());
            res.end(`Przesłane parametry: ${params.toString()}`);
        });
    } else {
        res.end("Do zobaczenia");
    }
});

const port = 8000;
server.listen(port, () => {
    console.log('Serwer został uruchomiony na porcie:', port);
})