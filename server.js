var express 	= require('express');

var app			= express();
var PORT		= 80;

app.use(express.static(__dirname));


app.listen(PORT,function(){
	console.log('Listening on http://localhost:%s',PORT);
	console.log('Stop Server with ctrl + c');
})