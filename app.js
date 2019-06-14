const http = require("http");
const querystring = require("querystring");
// console.log('method:', req.method);
// console.log('url:', req.url);
// req.query = querystring.parse(req.url.split('?')[1])
// console.log('req.query:', req.query);
// res.end(JSON.stringify(req.query));
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("req content type", req.headers["content-type"]);
    let postData = '';
    req.on('data',chunk => {
        postData += chunk.toString();
    });
    req.on('end',() => {
        console.log('postData: ',postData);
        res.end('hello world');
    });
  }
});

server.listen(8000);
console.log("OK 8000");
