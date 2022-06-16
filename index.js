const http = require('http');
const fs = require('fs');

const port = 6500;

const server = http.createServer((req, res) => {
    const pathname = req.url;

    switch (pathname) {
        case '/' : {
            res.writeHead(200, {
                'Content-type' : 'text/html'
            });
    
            fs.readFile('./public/home.html', 'utf-8', (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }

        break;

        case '/contact' : {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
    
            fs.readFile('./public/contact.html', 'utf-8', (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }

        break;

        case '/about' : {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
    
            fs.readFile('./public/about.html', 'utf-8', (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }

        break;

        case '/home' : {
            res.writeHead(302, {
                'Content-type': 'text/html'
            });
    
            fs.readFile('./public/home.html', 'utf-8', (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }

        break;

        default: {
            res.writeHead(404, {
                'Content-type': 'text/html',
            });
    
            res.end('<h1>Page not found</h1>');
        }
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to requests on port ${port}`);
});
