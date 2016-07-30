var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

//set view engine and ejs so node knows where to find these files
//note: by default, express will look for view files in a folder called views
//but you can change that using app.set()

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	//notice here you don't have to munally reponse the a request,
	//you can just use render in express and express will look for views folder and find
	//the file you provided with the ejs extension you just set
	//it's nice that you don't have to set file extension here, by you can change template engine if you want
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	//so the data in the json object will be passed to person.ejs
	//notice you don't need to reference the object
	//you can use the properties in that object directly
	//the value of ID is from the req.params.id that url provided
	//the JSON object that you give the view is generally called model
	//req.params just mean ``person/stanley`` not querystring
	res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);