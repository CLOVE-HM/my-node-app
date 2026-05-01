const _ = require('lodash');

let numbers = [[1], [[2, 3], [4, [5]]]];
let doubled = _.flattenDeep(numbers).map((num) => num * 2);
console.log('Doubled numbers:', doubled);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/hello') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`<p>Hello, World!</p>
//             <p>Available endpoints:</p>
//             <ul>
//                 <li><a href="/hello">/hello</a></li>
//                 <li><a href="/goodbye">/goodbye</a></li>
//                 <li><a href="/unknown">/unknown</a></li>
//             </ul>`);
//     } else if (req.url === '/goodbye') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`<p>Goodbye, World!</p>
//             <p>Available endpoints:</p>
//             <ul>
//                 <li><a href="/hello">/hello</a></li>
//                 <li><a href="/goodbye">/goodbye</a></li>
//                 <li><a href="/unknown">/unknown</a></li>
//             </ul>`);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end(`<p>Not Found</p>
//             <p>Available endpoints:</p>
//             <ul>
//                 <li><a href="/hello">/hello</a></li>
//                 <li><a href="/goodbye">/goodbye</a></li>
//             </ul>`);
//     }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

