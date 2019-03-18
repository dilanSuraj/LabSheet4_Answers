const http = require('http');

http.createServer((req,res) => {

    res.setHeader('Content-Type','text/html');

    switch (req.method) {

        case 'GET':res.write('<h1>Hello World!</h1>');
                   res.end();
                   break;

        case 'POST':req.on('data',data =>{
            res.write('<h1>Hello '+data.toString()+'</h1>');
            res.end();

        })
    }
}).listen(3000,(err) => {
    console.log("Server is listening to port 3000")
});