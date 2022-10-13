const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.write('Hellow World');
    res.end();
});
server.listen(port,hostname,()=> {
    console.log('Its running');
});
