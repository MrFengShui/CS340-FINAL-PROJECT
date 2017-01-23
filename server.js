/**/
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
/**/
var host = 'mysql.cs.orst.edu';
var username = 'cs340_luans';
var password = '3500';
var dbname = 'cs340_luans';
var connection = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    database: dbname
});
/**/
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({
    limit: '32mb'
}));
app.use(bodyParser.urlencoded({
    limit: '32mb',
    extended: true
}));

app.post('/login#purpos-validation', function(req, res) {
    connection.query('SELECT * FROM CONSUMER_INFO_TB', function(err, rows) {
        if (err) {
            console.log('Error: Fail to fetch result from database.', err);
        } else {
            console.log(rows);
        }
    });
});

app.get('/', function(req, res) {
    res.render('initial-page', {
        title: 'Initial Page'
    });
});

app.get('/query', function(req, res) {
    res.render('query-page', {
        title: 'Query Page'
    });
});

connection.connect(function(err) {
    if (err) {
        console.console.log('Erro: Failed to connect to MySQL Database');
        // throw err;
    } else {
        app.listen(10000, function() {
            console.log('==', 'Listening on Port', 10000, '==');
        });
    }
});
