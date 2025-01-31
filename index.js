const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const filePath = new URL(req.url, 'http://localhost:8080').pathname;
    console.log(filePath);

    if (req.method === 'GET') {
        let fileToLoad = '';

        if (filePath === '/') {
            fileToLoad = 'index.html';
        } else if (filePath === '/about') {
            fileToLoad = 'about.html';
        } else if (filePath === '/contact-me') {
            fileToLoad = 'contact-me.html';
        } else {
            fileToLoad = '404.html';
        }

        fs.readFile(path.join(__dirname, 'pages', fileToLoad), 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead((fileToLoad === '404.html') ? 404 : 200, { 'Content-type': 'text/html' });
            res.end(content);
            return;
        });
    }
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});
