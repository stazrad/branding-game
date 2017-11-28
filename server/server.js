// PACKAGES //
var fs            = require('fs'),
    path          = require('path'),
    express       = require('express'),
    bodyParser    = require('body-parser'),
    promisify     = require('es6-promisify'),
    fetch         = require('fetch'),
    es6promise    = require('es6-promise').polyfill();

// IMPORTS //
var indexRoutes = require('./routes/index');
var setup = require('./routes/setup');

// APP //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', function(path, option, callback) {
    fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// ROUTES //
app.use('/', indexRoutes);

// REST API //
app.post('/define/:word', setup.postDefine);
app.post('/log', setup.postLog);

// ERROR HANDLER //
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

var port = 5000;
app.listen(port, function() {
    console.log('Server is listening on port: ' + port);
});
