

var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

const getalbumnames = './public/albums/';
const fs = require('fs');




var app = express();


app.use(express.static(__dirname+"/public"));
app.get('/', function(req, res){
    res.sendfile('album1.html', { root: __dirname + "/public" } );

});
app.use(bodyParser.json());

var images = new Array();
var albums = new Array();
var i;
var temp = new Array();
var randm = 'thisisrandom.jpg'

//this gets album names 
fs.readdir(getalbumnames, (err, list) => {
  list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  albums=list;
  console.log(albums);
  testFolder = new Array();
  		for (var i = 0; i <= albums.length-1 ; i++) {
  			console.log(albums[i]);
		
		  		//this gets image names
				testFolder[i] = './public/albums/' + albums[i] + '';

				fs.readdir(testFolder[i], (err, list) => {
				  list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
				  console.log(images.length);
				  	if (images.length%20!=0 || images.length != 0){
						for (var i = 20 - (images.length - 1); i > 1; i--) {
						  	images = images.concat(randm);
				  		};
					};
				  images = images.concat(list);
				  console.log(images);
				});

		};	
});






app.get('/albumpics', function(req, res){
    res.send(images);
});

app.get('/albumnames', function(req, res){
    res.send(albums);
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
console.log('server running on port 3000');
});
