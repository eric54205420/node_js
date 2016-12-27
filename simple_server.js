// node simple_server.js
// localhost:80

var ip = '127.0.0.1',
	port = 80,
	http = require ( 'http' );
	
function onRequest ( request, reponse ){
	
	console.log ( "request receive." );
	reponse.writeHead ( 200, {"Content-Type": "text/plain"});
	reponse.write("Hello World!");
	reponse.end();
}

http.createServer ( onRequest ).listen ( port, ip );
console.log ("Server has been started!" );
