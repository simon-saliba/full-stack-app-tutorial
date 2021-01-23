const express = require('express');
var cors = require('cors');
let app = express(); 
let port = process.env.PORT || 8080;
var path = require('path');
app.use(cors());

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, 'front/build')));

	app.get('/', function(req,res) {
		res.sendFile(path.join(__dirname, 'front/build', 'index.html'));
	});
}

app.get('/hello', function(req, res) { 
    res.json('Hello from backend !'); 
})
app.listen(port, () =>  { 
    console.log('Server listening on port: ' + port)
})