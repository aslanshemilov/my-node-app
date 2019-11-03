
/* start here */
/*
const http = require("http");
//var cfenv = require('cfenv'); //for Bluemix or PCF deployment
//var appEnv = cfenv.getAppEnv(); //get the app environment from Cloud Foundry
//var port=process.env.Port || 3000; //set our local port for local host
const port = 3000; //set our local port for local host
const server = '127.0.0.1';
const express = require("express");

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World!\n');
}).listen(port, server);

console.log('Server is running at http://'+server+':'+port+'/');
*/

const express = require("express");
var app = express();
const port = 3000; //set our local port for local host
const server = '127.0.0.1';

app.get("/", function(req, res){
	res.send("Hello World!");
	//res.json({hello: "world"});
});
var server = app.listen(port, function(){
	console.log('Server is running at http://'+server+':'+port+'/');
});