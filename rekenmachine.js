var http = require('http'),
	url = require('url');
http.createServer(function (req, res){
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/'){
		res.writeHead(200,{
		'Content-Type' : 'text/plain'
		});
		res.end('Welcome this is an calculator \n')
	}
	else if (pathname == '/add/2/3'){
		res.writeHead(200,{
		'Content-Type' : 'text/plain'
		});
		res.end('5 \n')
	}
	else if (pathname == '/sub/4.5/1.2'){
		res.writeHead(200,{
		'Content-Type' : 'text/plain'
		});
		res.end('3.3 \n')
	}
	else if (pathname == '/mul/op1/op2'){
		res.writeHead(200,{
		'Content-Type' : 'text/plain'
		});
		res.end('op1*op2\n')
	}
	else if (pathname == '/div/op1/op2'){
		res.writeHead(200,{
		'Content-Type' : 'text/plain'
		});
		res.end('op1/op2 \n')
	}else {
	    res.writeHead(404, {
	    'Content-Type': 'text/plain'
	    });
	    res.end('Page not found\n')
    } 
}).listen(8080)