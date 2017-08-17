var express = require('express');
var mysql = require('mysql');
var app =  express()

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodeMysqldb'
});

connection.connect(function(error) {
	if(!!error) {
		console.log('Error');
		console.log(error);
	} else {
		console.log('Connected');
	}
	
});

app.get('/', function(req, resp) {
	//about mysql
	connection.query('select * from sampleTable', function(error, rows, fields){
		//calback
		if(!!error) {
			console.log('Error in query');
			console.log(error);
		} else {
			console.log('Query successful');
			console.log(rows);
			resp.send('Hello, '+ rows[0].name);
		}
	});
})

app.listen(1337);