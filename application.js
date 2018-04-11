
var http = require('http');
var fttp = require('node-static');
var file = new fttp.Server('./progress_app',
{indexFile:'frame.html',cache:0});
var file0 = new fttp.Server('./private_public',
{cache:31536000});




http.createServer((req,res) => {
req.addListener('end',() => {

file.serve(req,res,err => {
file0.serve(req,res,err => {
if (err){res.writeHead(
err.status,err.headers);}
res.end();});});

}).resume();
}).listen(8081);




















