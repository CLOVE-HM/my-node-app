

import { createServer } from require('http');

const server = createServer((req, res) => {
    if (req.url === '/sepcialtest') {
        const ms = 10000;
        setTimeout(() => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<p>Now: ${new Date().toISOString()}</p>
                <p>Available endpoints:</p>
                <ul>
                    <li><a href="/hello">/hello</a></li>
                    <li><a href="/goodbye">/goodbye</a></li>
                    <li><a href="/unknown">/unknown</a></li>
                </ul>`);
        }, ms);

        // const start = Date.now();
        // while (Date.now() - start < ms) {
        //     // Doing nothing, just burning CPU cycles
        // }
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end(`<p>Now: ${new Date().toISOString()}</p>
        //     <p>Available endpoints:</p>
        //     <ul>
        //         <li><a href="/hello">/hello</a></li>
        //         <li><a href="/goodbye">/goodbye</a></li>
        //         <li><a href="/unknown">/unknown</a></li>
        //     </ul>`);
    } else if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<p>Hello, World!</p>
            <p>Available endpoints:</p>
            <ul>
                <li><a href="/hello">/hello</a></li>
                <li><a href="/goodbye">/goodbye</a></li>
                <li><a href="/unknown">/unknown</a></li>
            </ul>`);
    } else if (req.url === '/goodbye') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<p>Goodbye, World!</p>
            <p>Available endpoints:</p>
            <ul>
                <li><a href="/hello">/hello</a></li>
                <li><a href="/goodbye">/goodbye</a></li>
                <li><a href="/unknown">/unknown</a></li>
            </ul>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<p>Not Found</p>
            <p>Available endpoints:</p>
            <ul>
                <li><a href="/hello">/hello</a></li>
                <li><a href="/goodbye">/goodbye</a></li>
            </ul>`);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

