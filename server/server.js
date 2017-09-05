// PACKAGES //
var fs            = require('fs'),
    path          = require('path'),
    express       = require('express'),
    bodyParser    = require('body-parser');

// IMPORTS //
var indexRoutes = require('./routes/index');

// APP //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', function(path, option, callback) {
    fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
//app.use(express.static(path.join(__dirname, '../cient')));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// ROUTES //
app.use('/', indexRoutes);

// ERROR HANDLER //
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;
