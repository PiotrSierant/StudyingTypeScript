import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req)
    res.end('Witaj świecie!');
});

const port = 8000;
server.listen(port, () => {
    console.log('Serwer został uruchomiony na porcie:', port);
})